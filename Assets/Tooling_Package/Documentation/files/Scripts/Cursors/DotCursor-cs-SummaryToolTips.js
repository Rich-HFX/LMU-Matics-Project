﻿NDSummary.OnToolTipsLoaded("File:Scripts/Cursors/DotCursor.cs",{251:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype251\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">Ultraleap.&#8203;TouchFree.&#8203;Tooling.&#8203;Cursors.</span>&#8203;DotCursor</div></div></div><div class=\"TTSummary\">This is an example Touchless Cursor which positions a dot on the screen at the hand location, and reacts to the current ProgressToClick of the action (what determines this depends on the currently active interaction).</div></div>",253:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype253\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Range(0f, 60f)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span> fadeDuration</div></div><div class=\"TTSummary\">The number of frames over which the cursor should fade when appearing/disappearing</div></div>",254:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype254\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Header(&quot;Graphics&quot;)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> UnityEngine.UI.Image cursorBorder</div></div><div class=\"TTSummary\">The image of the border around the dot, this is the parent image in the prefab and is used to do all of the scaling of the images that make up this cursor.</div></div>",255:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype255\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> UnityEngine.UI.Image cursorFill</div></div><div class=\"TTSummary\">The main background image of the Cursor, used for fading the image out.</div></div>",256:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype256\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> SpriteRenderer ringOuterSprite</div></div><div class=\"TTSummary\">This refers to the Ring around the central cursor that is used to display the &quot;reactive&quot; state of the cursor; the closer the ring is to the dot, the closer you are to &quot;clicking&quot;.</div></div>",257:"<div class=\"NDToolTip TVariable LCSharp\"><div class=\"TTSummary\">Enables/disables the ring cursor around the dot. Here primarily for use in the inspector.</div></div>",258:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype258\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Header(&quot;Ring&quot;)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span> cursorMaxRingSize</div></div></div>",259:"<div class=\"NDToolTip TVariable LCSharp\"><div class=\"TTSummary\">The maximum size for the ring to be relative to the size of the dot.</div></div>",260:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype260\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private const float</span> minRingScale</div></div></div>",261:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype261\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> AnimationCurve ringCurve</div></div><div class=\"TTSummary\">This curve is used to determine how the ring\'s scale changes with the value of the latest InputAction\'s ProgressToClick.</div></div>",262:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype262\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> RectTransform ringOuter</div></div><div class=\"TTSummary\">This refers to the Ring around the central cursor that is used to display the &quot;reactive&quot; state of the cursor; the closer the ring is to the dot, the closer you are to &quot;clicking&quot;</div></div>",263:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype263\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> RectTransform ringMask</div></div><div class=\"TTSummary\">This is a reference to the mask that is used to make the center of the ring visual transparent. It has to be scaled to match the ring itself.</div></div>",264:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype264\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Header(&quot;Pulse&quot;)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> AnimationCurve pulseShrinkCurve</div></div><div class=\"TTSummary\">When a &quot;click&quot; is recognised, an animation plays where the dot &quot;pulses&quot; (briefly shrinking and expanding). This AnimationCurve governs the shrinking that follows a &quot;DOWN&quot; input.</div></div>",265:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype265\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> AnimationCurve pulseGrowCurve</div></div><div class=\"TTSummary\">When a &quot;click&quot; is recognised, an animation plays where the dot &quot;pulses&quot; (briefly shrinking and expanding). This AnimationCurve governs the growing back to full size that follows a &quot;UP&quot; input.</div></div>",266:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype266\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Range(0.01f, 1f)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span> pulseSeconds</div></div><div class=\"TTSummary\">The amount of time each part of the pulse should last (a pulse will last twice this long)</div></div>",267:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype267\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Range(0.01f, 2f)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span> cursorDownScale</div></div><div class=\"TTSummary\">The scale of the cursor\'s dot at its smallest size (between the shrink and the grow</div></div>",268:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype268\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Coroutine cursorScalingRoutine</div></div></div>",269:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype269\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected bool</span> hidingCursor</div></div></div>",270:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype270\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected bool</span> growQueued</div></div></div>",271:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype271\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected</span> Vector3 cursorLocalScale</div></div></div>",272:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype272\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected const int</span> ringSpriteSortingOrder</div></div></div>",274:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype274\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual void</span> UpdateCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vector2&nbsp;</td><td class=\"PName last\">_screenPos,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">_progressToClick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Used to update the cursor when recieving a &quot;MOVE&quot; InputAction. Updates the cursor\'s position, as well as the size of the ring based on the current ProgressToClick.</div></div>",275:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype275\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ScaleRing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">_progressToClick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",277:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype277\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected override void</span> HandleInputAction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InputAction&nbsp;</td><td class=\"PName last\">_inputData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This override replaces the basic functionality of the TouchlessCursor, making the cursor\'s ring scale dynamically with the current ProgressToClick and creating a small &quot;shrink&quot; animation when a &quot;DOWN&quot; event is recieved, and a &quot;grow&quot; animation when an &quot;UP&quot; is recieved.</div></div>",278:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override void</span> SetColors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Color&nbsp;</td><td class=\"PName last\">_primary,</td></tr><tr><td class=\"PType first\">Color&nbsp;</td><td class=\"PName last\">_secondary,</td></tr><tr><td class=\"PType first\">Color&nbsp;</td><td class=\"PName last\">_tertiary</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This override ensures the correct cursor UI elemets are coloured correctly when new colours are set.</div></div>",279:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype279\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected override void</span> OnDisable()</div></div><div class=\"TTSummary\">This override of Unity\'s OnDisable feature of MonoBehaviour does the teardown of this Cursor when it is disabled.</div></div>",280:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype280\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected override void</span> InitialiseCursor()</div></div><div class=\"TTSummary\">This override ensures that the DotCursor is properly set up with relative scales and sorting orders for the ring sprites.</div></div>",281:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype281\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override void</span> ShowCursor()</div></div><div class=\"TTSummary\">This override replaces the basic functionality of the TouchlessCursor to ensure that the cursor is faded smoothly when being set to show.</div></div>",282:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype282\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override void</span> HideCursor()</div></div><div class=\"TTSummary\">This override replaces the basic functionality of the TouchlessCursor to ensure that the cursor is faded smoothly when being set to hide.</div></div>",284:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype284\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual</span> IEnumerator GrowCursorDot()</div></div><div class=\"TTSummary\">This coroutine smoothly expands the cursor dots size.</div></div>",285:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype285\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual</span> IEnumerator ShrinkCursorDot()</div></div><div class=\"TTSummary\">This coroutine smoothly contracts the cursor dots size.</div></div>",286:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype286\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual</span> IEnumerator FadeCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">_from,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">_to,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">_duration,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">_disableOnEnd</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This coroutine smoothly fades the cursors colours.</div></div>",287:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype287\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> SetCursorLocalScale(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">_scale</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This function resizes the cursor and its border.</div></div>",288:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype288\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual void</span> ResetCursor()</div></div><div class=\"TTSummary\">This function stops all scaling coroutines and clears their related variables.</div></div>"});