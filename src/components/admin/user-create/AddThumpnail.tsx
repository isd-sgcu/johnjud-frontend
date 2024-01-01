import { addIcon } from '@iconify/react';
import { Icon } from '@iconify/react';

addIcon("custom:plus", {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <g filter="url(#filter0_d_694_2885)">
    <path d="M15 48H81M48 15V81" stroke="#808086" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_d_694_2885" x="10.5" y="12.5" width="79" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="2" dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_694_2885"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_694_2885" result="shape"/>
    </filter>
  </defs>
  </svg>`,
  width: 96,
  height: 96
})

const AddThumpnail = (props) => {
  return (
    <div className="flex w-full flex-col max-w-80">
      <div className="flex aspect-square w-full items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm ">
        <Icon icon="custom:plus" className="w-[30%] h-[30%]" />
      </div>
    </div>
  );
};

export default AddThumpnail;
