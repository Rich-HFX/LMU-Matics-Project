using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using ViveSR.anipal.Eye;

public class EyetrackingController : MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            SRanipal_Eye.LaunchEyeCalibration();
            
        }
    }
}
