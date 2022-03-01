using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace NMY.Zeiss.EyeDisorderVR{
	//[ImageEffectAllowedInSceneView]
//	[ExecuteInEditMode]
	public class CataractImageEffect : DisorderImageEffect
	{
	    private Material cataractMat;
	    [Range(0, 1)]
	    public float greyscaleIntensity;
	    [Range(0, 1)]
	    public float contrastIntensity;
	    [Range(1, 8)]
	    public float contrastLevel;
	    public Color greyscaleTint;
	    [Range(1,5)]
	    public float downSam = 1;
	    [Range(0, 10)]
	    public float blurIterations;
	    // Use this for initialization

	    void Start()
	    {
	        cataractMat = new Material(Shader.Find("Hidden/CataractImageEffect"));
	    }

	    void OnRenderImage(RenderTexture src, RenderTexture dest)
	    {
	        float mainWidth = src.width / (downSam * downSam);
	        float mainHeight = src.height / (downSam * downSam);
	        int setWidth = (int)mainWidth;
	        int setHeight = (int)mainHeight;
	        RenderTexture downTexture = RenderTexture.GetTemporary(setWidth, setHeight);
	        Graphics.Blit(src, downTexture);

	        for (float i = 0; i < blurIterations; i++)
	        {
	            RenderTexture blurTexture = RenderTexture.GetTemporary(downTexture.width, downTexture.height);
	            Graphics.Blit(downTexture, blurTexture, cataractMat,1);
	            RenderTexture.ReleaseTemporary(downTexture);    
	            downTexture = blurTexture;
	        }

	        cataractMat.SetFloat("_contrastInt", contrastIntensity);
	        cataractMat.SetFloat("_contrastLevel", contrastLevel);
	        cataractMat.SetFloat("_greyscaleInt", greyscaleIntensity);
	        cataractMat.SetColor("_greyscaleTint", greyscaleTint);
	        Graphics.Blit(downTexture, dest, cataractMat,0);
	        RenderTexture.ReleaseTemporary(downTexture);
	    }
	}
}