using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EyeDisorder : MonoBehaviour{
	public DisorderImageEffect imageEffect;
	public Animator animator;
	public DisorderImageEffect imageEffectRight;
	public Animator animatorRight;
	public RuntimeAnimatorController animatorController;

	public Animator additionalAnimation;

	void Start(){
		imageEffect.enabled = false;

		if(imageEffectRight)
			imageEffectRight.enabled = false;
	}


    void ActivateEnter(){
		animator.runtimeAnimatorController = animatorController;


		if(animatorRight)
			animatorRight.runtimeAnimatorController = animatorController;
	}

	void ActivateImmediatelyEnter(){
		animator.runtimeAnimatorController = animatorController;

		if(animatorRight)
			animatorRight.runtimeAnimatorController = animatorController;
	}

	void DeactivateEnter(){
		imageEffect.enabled = false;
		if(imageEffectRight)
			imageEffectRight.enabled = false;
			
		animator.SetBool("show", false);
		animator.SetBool("attentuate", false);

		if (additionalAnimation) {
			additionalAnimation.SetBool ("show", false);
			additionalAnimation.SetBool ("attentuate", false);
		}

		if (animatorRight) {
			animatorRight.SetBool ("show", false);
			animatorRight.SetBool("attentuate", false);
		}
	}

	void DeactivateImmediatelyEnter(){
		imageEffect.enabled = false;
		if(imageEffectRight)
			imageEffectRight.enabled = false;
			
		animator.SetBool("show", false);
		animator.SetBool("attentuate", false);

		if (additionalAnimation) {
			additionalAnimation.SetBool ("show", false);
			additionalAnimation.SetBool ("attentuate", false);
		}

		if (animatorRight) {
			animatorRight.SetBool ("show", false);
			animatorRight.SetBool("attentuate", false);
		}
	}

	void ActivateDisorderEffect(){
		imageEffect.enabled = true;
		if(imageEffectRight)
			imageEffectRight.enabled = true;
			
		animator.SetBool("show", true);

		if (additionalAnimation)
			additionalAnimation.SetBool ("show",true);

		if (animatorRight) {
			animatorRight.SetBool ("show", true);
	
		}
	}

	void AttentuateDisorderEffect(){
		animator.SetBool("attentuate", true);

		if (additionalAnimation)
			additionalAnimation.SetBool ("attentuate", true);

		if (animatorRight) {
			animatorRight.SetBool("attentuate", true);
		}
	}

	void HideDisorderEffect(){
		animator.SetBool("attentuate", false);
		animator.SetBool("show", false);

		if (additionalAnimation)
			additionalAnimation.SetBool ("attentuate", false);

		if (animatorRight) {
			animatorRight.SetBool ("show", false);
			animatorRight.SetBool("attentuate", false);
		}
		// TODO Disable effect component on completion
	}
}
