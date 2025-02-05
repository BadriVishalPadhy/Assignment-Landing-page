import { FC } from "react";

export const Orbits: FC = () => {
  return (
    <div className="absolute inset-0 ">
      {/* Existing orbits SVGs */}
      <svg
        className="absolute w-full h-full"
        viewBox="999 -20 99 1005"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1772.38 717.123C1754.93 786.03 1706.11 843.564 1632.68 888.589C1559.25 933.617 1461.23 966.116 1345.48 984.951C1113.97 1022.62 811.585 1005.62 493.217 925.001C174.849 844.379 -99.1792 715.413 -284.858 572.096C-377.698 500.437 -448.431 425.205 -491.582 350.655C-534.732 276.107 -550.287 202.272 -532.837 133.365C-515.388 64.4573 -466.566 6.92394 -393.136 -38.1017C-319.704 -83.129 -221.69 -115.628 -105.933 -134.464C125.577 -172.134 427.959 -155.135 746.327 -74.5132C1064.7 6.10825 1338.72 135.075 1524.4 278.392C1617.24 350.051 1687.97 425.283 1731.13 499.833C1774.28 574.38 1789.83 648.216 1772.38 717.123Z"
          stroke="url(#paint0_linear_0_697)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_697"
            x1="-452.555"
            y1="93.6755"
            x2="1543.61"
            y2="921.813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#484848" />
            <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
            <stop offset="1" stopColor="#484848" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute w-full h-full"
        viewBox="999 -20 99 1005"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1455.27 631.82C1442.63 681.733 1407.27 723.418 1354.05 756.049C1300.83 788.681 1229.79 812.238 1145.88 825.892C978.06 853.199 758.855 840.877 528.054 782.431C297.254 723.984 98.6035 630.491 -35.9941 526.601C-103.294 474.656 -154.56 420.126 -185.833 366.098C-217.104 312.073 -228.368 258.58 -215.728 208.667C-203.088 158.754 -167.722 117.069 -114.507 84.4388C-61.2891 51.8067 9.75156 28.2494 93.663 14.5956C261.484 -12.7116 480.689 -0.389593 711.49 58.0569C942.29 116.503 1140.94 209.996 1275.54 313.886C1342.84 365.831 1394.1 420.361 1425.38 474.389C1456.65 528.414 1467.91 581.908 1455.27 631.82Z"
          stroke="url(#paint0_linear_0_696)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_696"
            x1="-157.657"
            y1="179.859"
            x2="1289.55"
            y2="780.253"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#484848" />
            <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
            <stop offset="1" stopColor="#484848" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="1811"
        height="1005"
        viewBox="999 -20 99 1005"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1772.38 717.123C1754.93 786.03 1706.11 843.564 1632.68 888.589C1559.25 933.617 1461.23 966.116 1345.48 984.951C1113.97 1022.62 811.585 1005.62 493.217 925.001C174.849 844.379 -99.1792 715.413 -284.858 572.096C-377.698 500.437 -448.431 425.205 -491.582 350.655C-534.732 276.107 -550.287 202.272 -532.837 133.365C-515.388 64.4573 -466.566 6.92394 -393.136 -38.1017C-319.704 -83.129 -221.69 -115.628 -105.933 -134.464C125.577 -172.134 427.959 -155.135 746.327 -74.5132C1064.7 6.10825 1338.72 135.075 1524.4 278.392C1617.24 350.051 1687.97 425.283 1731.13 499.833C1774.28 574.38 1789.83 648.216 1772.38 717.123Z"
          stroke="url(#paint0_linear_0_697)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_697"
            x1="-452.555"
            y1="93.6755"
            x2="1543.61"
            y2="921.813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#484848" />
            <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
            <stop offset="1" stopColor="#484848" />
          </linearGradient>
        </defs>
      </svg>

      {/* New star SVGs */}
      <svg
        width="54"
        height="46"
        viewBox="0 0 54 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-20 right-56 animate-twinkle hidden md:block"
      >
        <path
          d="M40.4708 0C34.0714 10.8962 30.5357 16.33 26.9708 16.33C23.4058 16.33 19.8701 10.8962 13.5 0C19.8701 10.8962 22.9091 16.6462 21.1266 19.665C19.3442 22.6838 12.7695 23 0 23C13.237 23 19.8117 23.3162 21.3019 26.6512C22.7045 29.7562 19.6656 35.4775 13.5 46C19.8993 35.1037 23.4351 29.67 27 29.67C30.5649 29.67 34.1007 35.1037 40.5 46C33.7208 34.4137 30.7403 28.6637 33.2532 25.7887C35.474 23.2587 42.0195 23 54 23C40.5 23 33.9253 22.655 32.6104 19.1187C31.4123 15.9562 34.4513 10.2638 40.4708 0Z"
          fill="white"
        />
      </svg>

      <svg
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute  top-36 left-40  animate-twinkle animation-delay-200 hidden md:block"
      >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
        />
      </svg>

      <svg
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-8 right-20 animate-twinkle animation-delay-400 hidden md:block"
      >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

