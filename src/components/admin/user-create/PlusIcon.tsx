const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g filter="url(#filter0_d_694_2885)">
                <path d="M15 48H81M48 15V81" stroke="#808086" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_694_2885" x="10.5" y="12.5" width="79" height="79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_694_2885" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_694_2885" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
export default PlusIcon;