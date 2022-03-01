Shader "Hidden/CataractImageEffect"
{
	Properties
	{
		_MainTex ("Texture", 2D) = "white" {}
		_greyscaleInt("Test",Range(0,1)) = 0
	}
	SubShader
	{
		Tags { "RenderType"="Opaque" }
		LOD 100
		ZTest Always
		ZWrite Off
		// Pass : Greyscale
		Pass
		{
			CGPROGRAM
			#pragma vertex vert_img
			#pragma fragment frag
			#pragma multi_compile_fog
			
			#include "UnityCG.cginc"



			uniform sampler2D _MainTex;
			float4 _MainTex_ST;
			uniform fixed4 _greyscaleTint;
			uniform half _greyscaleInt = 1;
			uniform half _contrastLevel = 1;
			uniform fixed _contrastInt = 1;
			
			fixed4 frag (v2f_img i) : SV_Target
			{
				fixed4 col = tex2D(_MainTex, i.uv) ;
				float lum = col.r*.3 + col.g*.59 + col.b*.11;
				float3 bw = float3(lum, lum, lum);
				bw.rgb += (Luminance(bw.rgb) * (-3 + bw.r * _contrastLevel)) * _contrastInt;


				fixed4 final = col;
				final.rgb = lerp(col, bw * _greyscaleTint, _greyscaleInt) ;


				return final;
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
