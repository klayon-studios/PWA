type IconProps = React.HTMLAttributes<SVGElement>;
import {
  Backpack,
  BadgePlus,
  Check,
  ExternalLink,
  Focus,
  Home,
  RotateCw,
  Wallet,
  X,
} from "lucide-react";

export const Icons = {
  loader: RotateCw,
  collect: BadgePlus,
  inventory: Wallet,
  scan: Focus,
  home: Home,
  x: X,
  externalLink: ExternalLink,
  check: Check,
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_1_2)">
        <path
          d="M11.995 24.0104C18.6252 24.0104 24 18.6354 24 12.0052C24 5.371 18.629 0 11.9946 0C5.36442 0 -0.010376 5.375 -0.010376 12.0052C-0.010376 18.6396 5.36062 24.0106 11.995 24.0106V24.0104ZM8.24322 2.251H15.7464C19.0616 2.251 21.749 4.9384 21.749 8.2536V15.7568C21.749 19.072 19.0616 21.7594 15.7464 21.7594H8.24322C4.92802 21.7594 2.24062 19.072 2.24062 15.7568V8.2536C2.24062 4.9384 4.92802 2.251 8.24322 2.251ZM2.99082 12.0052C2.99082 11.5908 3.32682 11.2548 3.74122 11.2548H5.99222C7.23542 11.2548 8.24322 10.247 8.24322 9.0038V6.7528C8.24322 6.3384 8.57922 6.0024 8.99362 6.0024C9.40802 6.0024 9.74402 6.3384 9.74402 6.7528V9.0038C9.74402 10.247 10.7518 11.2548 11.995 11.2548H20.2486C20.663 11.2548 20.999 11.5908 20.999 12.0052C20.999 12.4196 20.663 12.7556 20.2486 12.7556H11.995C10.7518 12.7556 9.74402 13.7634 9.74402 15.0066V17.2576C9.74402 17.672 9.40802 18.008 8.99362 18.008C8.57922 18.008 8.24322 17.672 8.24322 17.2576V15.0066C8.24322 13.7634 7.23542 12.7556 5.99222 12.7556H3.74122C3.32682 12.7556 2.99082 12.4196 2.99082 12.0052Z"
          fill="url(#paint0_linear_1_2)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="-0.010376"
          y1="12.0052"
          x2="24"
          y2="12.0052"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F56566"></stop>
          <stop offset="1" stopColor="#BA4BFA"></stop>
        </linearGradient>
        <clipPath id="clip0_1_2">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),

  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
