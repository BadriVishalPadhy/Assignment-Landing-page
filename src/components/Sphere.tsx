import { FC } from 'react'

interface SphereProps {
  className?: string;
}

export const Sphere: FC<SphereProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg 
        width="259" 
        height="259" 
        viewBox="0 0 200 389" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g filter="url(#filter0_iii_0_713)">
          <ellipse cx="129.5" cy="129.5" rx="129.5" ry="129.5" fill="url(#paint0_linear_0_713)"/>
        </g>
        <path 
          d="M258.75 129.5C258.75 200.883 200.883 258.75 129.5 258.75C58.1173 258.75 0.250256 200.883 0.250256 129.5C0.250256 58.1173 58.1173 0.250256 129.5 0.250256C200.883 0.250256 258.75 58.1173 258.75 129.5Z" 
          stroke="url(#paint1_linear_0_713)" 
          strokeWidth="0.500511" 
          strokeLinecap="round"
        />
        <defs>
          <filter 
            id="filter0_iii_0_713" 
            x="-35.0358" 
            y="-50.0511" 
            width="294.036" 
            height="329.072" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix 
              in="SourceAlpha" 
              type="matrix" 
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
              result="hardAlpha"
            />
            <feOffset dx="-35.0358" dy="-50.0511"/>
            <feGaussianBlur stdDeviation="40.05"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix 
              type="matrix" 
              values="0 0 0 0 0.894118 0 0 0 0 0.705882 0 0 0 0 0.0509804 0 0 0 0.55 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_713"/>
            <feColorMatrix 
              in="SourceAlpha" 
              type="matrix" 
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
              result="hardAlpha"
            />
            <feOffset dy="20.0205"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix 
              type="matrix" 
              values="0 0 0 0 0.7625 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="effect1_innerShadow_0_713" result="effect2_innerShadow_0_713"/>
            <feColorMatrix 
              in="SourceAlpha" 
              type="matrix" 
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
              result="hardAlpha"
            />
            <feOffset/>
            <feGaussianBlur stdDeviation="12"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix 
              type="matrix" 
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.26 0"
            />
            <feBlend mode="normal" in2="effect2_innerShadow_0_713" result="effect3_innerShadow_0_713"/>
          </filter>
          <linearGradient 
            id="paint0_linear_0_713" 
            x1="8.81702" 
            y1="79.3532" 
            x2="161.462" 
            y2="143.277" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF6D7"/>
            <stop offset="1" stopColor="#E4B40D"/>
          </linearGradient>
          <linearGradient 
            id="paint1_linear_0_713" 
            x1="129.5" 
            y1="0" 
            x2="129.5" 
            y2="259" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EDD955"/>
            <stop offset="1" stopColor="#BDBDBD" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

