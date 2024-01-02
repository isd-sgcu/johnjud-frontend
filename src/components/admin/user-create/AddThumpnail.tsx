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

addIcon("custom:pencil", {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M8.95208 20.7095L3.7977 15.5552M12.75 6.50746L18 11.7575M8.68934 20.7575H4.5C4.30109 20.7575 4.11032 20.6784 3.96967 20.5378C3.82902 20.3971 3.75 20.2064 3.75 20.0075V15.8181C3.75 15.7196 3.7694 15.6221 3.80709 15.5311C3.84478 15.4401 3.90003 15.3574 3.96967 15.2878L15.2197 4.03778C15.3603 3.89713 15.5511 3.81812 15.75 3.81812C15.9489 3.81812 16.1397 3.89713 16.2803 4.03778L20.4697 8.22713C20.6103 8.36778 20.6893 8.55854 20.6893 8.75746C20.6893 8.95637 20.6103 9.14713 20.4697 9.28779L9.21967 20.5378C9.15003 20.6074 9.06735 20.6627 8.97635 20.7004C8.88536 20.7381 8.78783 20.7575 8.68934 20.7575Z" stroke="#C81425" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  width: 24,
  height: 25
})

const AddThumpnail = (props) => {
  return (
    <div className="flex w-full flex-col max-w-80 relative">
      {/* TODO: Add Thumpnail system */}
      <div className="flex aspect-square w-full items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm ">
        <Icon icon="custom:plus" className="w-[30%] h-[30%]" />
      </div>
      <div className='absolute bottom-5 right-5'>
        <Icon icon="custom:pencil" className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default AddThumpnail;
