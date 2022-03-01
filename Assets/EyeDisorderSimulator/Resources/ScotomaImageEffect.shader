Shader "Hidden/ScotomaImageEffect"
{
	Properties
	{
		_MainTex ("Texture", 2D) = "white" {}
		_BlackDotInt("Black Dot Intensity", Float) = 0
		_DistortionTex("Distortion Texture", 2D) = "black"
		_DistortionInt("Distortion Intensity", Float) = 0
		_CenterPoint ("Center Point", Vector) = (0.5,0.5,0.5,0.5)
		_MaskIntensity("Mask Intensity", float) = 0
		_Falloff("Falloff", float) = 0
	}
	SubShader
	{
		Tags { "RenderType"="Opaque" }
		LOD 100
		ZTest Always
		//Pass : Black Dot
		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			
			#include "UnityCG.cginc"

			struct appdata
			{
				float4 vertex : POSITION;
				float2 uv : TEXCOORD0;
			};

			struct v2f
			{
				float2 uv : TEXCOORD0;
				float4 vertex : SV_POSITION;
			};

			sampler2D _MainTex;
			sampler2D _BlackTex;
			sampler2D _DistortionTex;
			half _DistortionInt;
			float4 _MainTex_ST;
			half4 _CenterPoint;
			half _MaskIntensity;
			half _Falloff;
			half _BlackDotInt;
			
			v2f vert (appdata v)
			{
				v2f o;
				o.vertex = UnityObjectToClipPos(v.vertex);
				o.uv = TRANSFORM_TEX(v.uv, _MainTex) - _CenterPoint.xy;
				return o;
			}
			
			fixed4 frag (v2f i) : SV_Target
			{

				float2 offset = i.uv / _CenterPoint.zw;
				float t = min(1, length(offset)*_Falloff) ;
				float maskSize = lerp(0, 1, 1 - (_MaskIntensity * 0.3 / t))*_Falloff;
				maskSize += _MaskIntensity;
				maskSize = 1 - saturate(maskSize);

				fixed4 col = tex2D(_MainTex, (i.uv + _CenterPoint.xy)) *saturate(1- maskSize *_BlackDotInt *2);


				return col;
			}
			ENDCG
		}

			// Pass : Distortion
			Pass
		{
				CGPROGRAM
				#pragma vertex vert
				#pragma fragment frag

				#include "UnityCG.cginc"

			struct appdata
			{
				float4 vertex : POSITION;
				float2 uv : TEXCOORD0;
			};

			struct v2f
			{
				float2 uv : TEXCOORD0;
				float4 vertex : SV_POSITION;
			};

			sampler2D _MainTex;
			sampler2D _BlackTex;
			sampler2D _DistortionTex;
			half _DistortionInt;
			float4 _MainTex_ST;
			half4 _CenterPoint;
			half _MaskIntensity;
			half _Falloff;

			v2f vert(appdata v)
			{
				v2f o;
				o.vertex = UnityObjectToClipPos(v.vertex);
				o.uv = TRANSFORM_TEX(v.uv, _MainTex) - _CenterPoint.xy;
				return o;
			}

			fixed4 frag(v2f i) : SV_Target
			{
				float2 distortion = tex2D(_DistortionTex, i.uv).xy;
				distortion = ((distortion * 2) - 1) *_DistortionInt;

				float2 uvDistortion = i.uv;

				float2 offset = uvDistortion / _CenterPoint.zw;

				float t = min(1, length(offset)*_Falloff);

				float maskSize = lerp(0, 1, 1 - (_MaskIntensity * 0.2 / t))*_Falloff;

				maskSize += _MaskIntensity;
				maskSize = 1 - saturate(maskSize);

				fixed4 col = tex2D(_MainTex, (i.uv + float2(distortion* maskSize) + _CenterPoint.xy));

				return col;
			}
				ENDCG
		}
				// Pass : Box Blur
				Pass
		{
				CGPROGRAM
				#pragma vertex vert_img
				#pragma fragment frag
				#include "UnityCG.cginc"

				uniform sampler2D _MainTex;
				uniform float4 _MainTex_TexelSize;
				float4 boxBlur(sampler2D tex, float2 uv, float4 size)
				{
					float4 c = tex2D(tex, uv + float2(-size.x, size.y)) + tex2D(tex, uv + float2(0, size.y)) + tex2D(tex, uv + float2(size.x, size.y))
						+ tex2D(tex, uv + float2(-size.x, 0)) + tex2D(tex, uv + float2(size.x, 0))
						+ tex2D(tex, uv + float2(-size.x, -size.y)) + tex2D(tex, uv + float2(0, -size.y)) + tex2D(tex, uv + float2(size.x, -size.y));

					c /= 8;
					return c;
				}
				fixed4 frag(v2f_img i) : SV_Target
				{
					fixed4 col = boxBlur(_MainTex, i.uv, _MainTex_TexelSize);
					return col;
				}
				ENDCG
		}
	}
}
