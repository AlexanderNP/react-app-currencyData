import styles from './ThemesButton.module.css'

export function ThemesButton({ changeTheme }) {
  return (
    <button className={styles.ThemeButton} onClick={changeTheme}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_47_49)">
          <path d="M20.833 0H19.1665V3.33312H20.833V0Z" fill="#C9C9C9" />
          <path d="M11.555 2.0407L10.1118 2.87396L11.7784 5.76045L13.2216 4.92719L11.555 2.0407Z" fill="#C9C9C9" />
          <path d="M4.54078 8.44483L3.70752 9.88803L6.594 11.5546L7.42726 10.1114L4.54078 8.44483Z" fill="#C9C9C9" />
          <path d="M5.00109 17.4995H1.66797V19.1661H5.00109V17.4995Z" fill="#C9C9C9" />
          <path d="M6.59336 25.1106L3.70654 26.7769L4.53964 28.2202L7.42645 26.554L6.59336 25.1106Z" fill="#C9C9C9" />
          <path d="M33.405 25.1068L32.5718 26.55L35.4583 28.2166L36.2915 26.7734L33.405 25.1068Z" fill="#C9C9C9" />
          <path d="M38.3321 17.4995H34.999V19.1661H38.3321V17.4995Z" fill="#C9C9C9" />
          <path d="M35.4601 8.44531L32.5732 10.1115L33.4063 11.5549L36.2932 9.88869L35.4601 8.44531Z" fill="#C9C9C9" />
          <path d="M28.4436 2.03875L26.7773 4.92557L28.2207 5.75866L29.8869 2.87184L28.4436 2.03875Z" fill="#C9C9C9" />
          <path d="M12.9019 33.3313C12.9967 33.8808 13.0775 34.4356 13.1402 34.9978H26.8572C26.9241 34.4418 27.0106 33.8864 27.1152 33.3313H12.9019Z" fill="#C9C9C9" />
          <path d="M13.2817 36.6644C13.3106 37.2006 13.3339 37.7386 13.3339 38.2835V40H26.6662V37.9335C26.6662 37.5105 26.6904 37.0874 26.7124 36.6644H13.2817Z" fill="#C9C9C9" />
          <path d="M28.3328 8.18567C25.6497 5.77755 22.1833 4.67762 18.5753 5.07758C12.8756 5.71086 8.251 10.3022 7.59276 16.0018C7.25111 18.9183 7.89277 21.7597 9.45925 24.2012C10.8832 26.4355 11.9157 28.9587 12.56 31.6648H27.4869C28.1645 29.0282 29.252 26.4089 30.7743 23.8345C31.8992 21.918 32.4992 19.7265 32.4992 17.5017C32.4992 13.9519 30.9827 10.5522 28.3328 8.18567Z" fill="#C9C9C9" />
        </g>
        <defs>
          <clipPath id="clip0_47_49">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}