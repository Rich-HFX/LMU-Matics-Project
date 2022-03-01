//========= Copyright 2018, HTC Corporation. All rights reserved. ===========
using UnityEngine;
using UnityEngine.Assertions;
using ViveSR.anipal.Eye;
using System;
using System.IO;


public class ScotomaViveEyePro : MonoBehaviour
{
    private Material blurMat;
    private Material scotomaMat;
    public Texture2D distortionTex;
    [Range(0, 1)]
    public float blackDotIntensity;
    [Range(0, 1)]
    public float distortionIntensity;
    [Range(0, 10)]
    public float maskHardness = 0.5f;
    [Range(0.01f, 10)]
    public float maskFallOff = 0.5f;
    [Range(1, 5)]
    public int downSam = 1;
    [Range(0, 10)]
    public float blurIterations;
    [Tooltip("X = X Position Offset, Y = Y Position Offset, Z = X Stretch, W = Y Stretch")]
    public Vector4 centerPosition = new Vector4(0.5f, 0.5f, 0.5f, 0.5f);
    public Vector2 eyeOffset;

    public enum Eye { Left, Right }

    public Camera eyeCamera;

    public Eye eye;

    public bool eyetracking;

    int frame = 0;
    Vector3 viewPos;

    //Variables for logging
    //public GameObject sceneManagerObject;
    //private LoggerFile logScript;
    //private ControlScript controlScript;

    private Vector4 backCenterPosition;
    private float backDistortionIntensity;
    private float backBlackDotIntensity;
    private float backMaskFallOff = 0.5f;
    private float backMaskHardness = 0.5f;

    private void Start()
    {
        //Getting scripts necessary for logging
        //logScript = sceneManagerObject.GetComponent<LoggerFile>();
        //controlScript = sceneManagerObject.GetComponent<ControlScript>();

        if (!SRanipal_Eye_Framework.Instance.EnableEye)
        {
            enabled = false;
            return;
        }

        scotomaMat = new Material(Shader.Find("Hidden/ScotomaImageEffect"));
        scotomaMat.SetTexture("_DistortionTex", distortionTex);
    }

    private bool isCalib = false;

    private void Update()
    {
        if (Input.GetKeyDown("c") && !isCalib)
        {
            backCenterPosition = centerPosition;
            backDistortionIntensity = distortionIntensity;
            backBlackDotIntensity = blackDotIntensity;
            backMaskFallOff = maskFallOff;
            backMaskHardness = maskHardness;

            centerPosition = new Vector4(centerPosition.x, centerPosition.y, 0.015f, 0.015f);
            distortionIntensity = 0;
            blackDotIntensity = 1;
            maskFallOff = 0.01f;
            maskHardness = 10;
            isCalib = true;
        }
        else if (Input.GetKeyDown("c") && isCalib)
        {
            centerPosition = backCenterPosition;
            distortionIntensity = backDistortionIntensity;
            blackDotIntensity = backBlackDotIntensity;
            maskFallOff = backMaskFallOff;
            maskHardness = backMaskHardness;
            isCalib = false;
        }

        SRanipal_Eye.GetVerboseData(out VerboseData data);


        if (eye == Eye.Left)
        {
            float X = data.left.pupil_position_in_sensor_area.x;
            float Y = data.left.pupil_position_in_sensor_area.y;

            centerPosition.x = X;
            centerPosition.y = 1f - Y;

            if (Input.GetKeyDown("d")) eyeOffset.x += 0.005f;
            if (Input.GetKeyDown("a")) eyeOffset.x -= 0.005f;
            if (Input.GetKeyDown("w")) eyeOffset.y += 0.005f;
            if (Input.GetKeyDown("s")) eyeOffset.y -= 0.005f;

            //logScript.sr4.WriteLine(controlScript.getVisNum()+" \t 0 \t " + X + " \t " + Y + " \t " + (Time.time - controlScript.getElapsedTime()));
        }

        if (eye == Eye.Right)
        {
            float X = data.right.pupil_position_in_sensor_area.x;
            float Y = data.right.pupil_position_in_sensor_area.y;

            centerPosition.x = X;
            centerPosition.y = 1f - Y;

            if (Input.GetKeyDown("right")) eyeOffset.x += 0.005f;
            if (Input.GetKeyDown("left")) eyeOffset.x -= 0.005f;
            if (Input.GetKeyDown("up")) eyeOffset.y += 0.005f;
            if (Input.GetKeyDown("down")) eyeOffset.y -= 0.005f;

            //logScript.sr4.WriteLine(controlScript.getVisNum() + " \t 1 \t " + X + " \t " + Y + " \t " + (Time.time - controlScript.getElapsedTime()));
        }
        
        frame += 1;
    }

    void OnRenderImage(RenderTexture src, RenderTexture dest)
    {
        centerPosition.x = centerPosition.x + eyeOffset.x;
        centerPosition.y = centerPosition.y + eyeOffset.y;
        //set material properties
        scotomaMat.SetFloat("_DistortionInt", distortionIntensity);
        scotomaMat.SetFloat("_MaskIntensity", maskHardness);
        scotomaMat.SetFloat("_Falloff", maskFallOff);
        scotomaMat.SetFloat("_BlackDotInt", blackDotIntensity);
        scotomaMat.SetVector("_CenterPoint", centerPosition);

        //creating a buffer with the black dot, using using Pass 00
        RenderTexture blackDotBuffer = RenderTexture.GetTemporary(src.width, src.height);
        Graphics.Blit(src, blackDotBuffer, scotomaMat, 0);

        //creating a buffer to distort the previous black dot buffer using Pass 01
        RenderTexture distortionBuffer = RenderTexture.GetTemporary(src.width, src.height);
        Graphics.Blit(blackDotBuffer, distortionBuffer, scotomaMat, 1);

        // Squared-Downsampling of the screen for box-blurring
        int mainWidth = src.width / (downSam * downSam);
        int mainHeight = src.height / (downSam * downSam);

        RenderTexture downTexture = RenderTexture.GetTemporary(mainWidth, mainHeight);
        Graphics.Blit(distortionBuffer, downTexture);

        //for-loop for box-blurring, more iterations for smoother blurring
        for (float i = 0f; i < blurIterations; i++)
        {
            RenderTexture blurTexture = RenderTexture.GetTemporary(downTexture.width, downTexture.height);
            Graphics.Blit(downTexture, blurTexture, scotomaMat, 2);
            RenderTexture.ReleaseTemporary(downTexture);
            downTexture = blurTexture;
        }


        //Blit to final output
        Graphics.Blit(downTexture, dest);

        //release all temporary buffers to avoid GC-Fill
        RenderTexture.ReleaseTemporary(downTexture);
        RenderTexture.ReleaseTemporary(blackDotBuffer);
        RenderTexture.ReleaseTemporary(distortionBuffer);
    }

    
}
 

