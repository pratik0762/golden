import React from "react";
import Rankoptim_logo from "../image/Rankoptim logo.jpg";

export const Header = () => {
  return (
    <header>
      <div className="w-100 pd-tb-10 top-header bg-color-blue">
        <div className="w-1500">
          <div className="flex align-item">
            <div className="w-50">
              <div className="flex align-item info">
                <div className="contact-info">
                  <div className="flex align-item">
                    <div className="contact-icon flex align-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_4_35)">
                          <path
                            d="M15.375 0H6.625C5.59375 0 4.75 0.84375 4.75 1.875V18.125C4.75 19.1562 5.59375 20 6.625 20H15.375C16.4062 20 17.25 19.1562 17.25 18.125V1.875C17.25 0.84375 16.4062 0 15.375 0ZM11 18.75C10.3088 18.75 9.75 18.1912 9.75 17.5C9.75 16.8088 10.3088 16.25 11 16.25C11.6912 16.25 12.25 16.8088 12.25 17.5C12.25 18.1912 11.6912 18.75 11 18.75ZM16 15H6V2.5H16V15Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_4_35"
                            x="0.75"
                            y="0"
                            width="20.5"
                            height="28"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_4_35"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_4_35"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="contact-number">+91-786-295-9207</div>
                  </div>
                </div>
                <div className="mail-info">
                  <div className="flex">
                    <div className="mail-icon flex align-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_4_31)">
                          <path
                            d="M4 7.5V17.5H24V7.5L14 13.75L4 7.5ZM4 2.5V5L14 11.25L24 5V2.5H4Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_4_31"
                            x="0"
                            y="2.5"
                            width="28"
                            height="23"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_4_31"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_4_31"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="mail-add">contact@rankoptim.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="soc-icon flex flex-end">
                <ul className="flex">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_4_23)">
                        <path
                          d="M14 5C11.2387 5 9 7.23875 9 10C9 12.7613 11.2387 15 14 15C16.7613 15 19 12.7613 19 10C19 7.23875 16.7613 5 14 5ZM14 12.5C12.6213 12.5 11.5 11.3787 11.5 10C11.5 8.62125 12.6213 7.5 14 7.5C15.3787 7.5 16.5 8.62125 16.5 10C16.5 11.3787 15.3787 12.5 14 12.5ZM17.75 0H10.25C6.79625 0 4 2.79625 4 6.25V13.75C4 17.2025 6.79625 20 10.25 20H17.75C21.2025 20 24 17.2025 24 13.75V6.25C24 2.79625 21.2025 0 17.75 0ZM21.5 13.75C21.5 15.8162 19.8162 17.5 17.75 17.5H10.25C8.18375 17.5 6.5 15.8162 6.5 13.75V6.25C6.5 4.18375 8.18375 2.5 10.25 2.5H17.75C19.8162 2.5 21.5 4.18375 21.5 6.25V13.75ZM19 3.75C18.3088 3.75 17.75 4.30875 17.75 5C17.75 5.69125 18.3088 6.25 19 6.25C19.6912 6.25 20.25 5.69125 20.25 5C20.25 4.30875 19.6912 3.75 19 3.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4_23"
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4_23"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4_23"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_4_27)">
                        <path
                          d="M22.8962 0H5.10375C4.49375 0 4 0.49375 4 1.10375V18.8962C4 19.5063 4.49375 20 5.10375 20H14.6838V12.265H12.0863V9.23875H14.6838V7.01C14.6838 4.42625 16.2612 3.02 18.5662 3.02C19.67 3.02 20.6187 3.1025 20.895 3.13875V5.83875L19.3062 5.84C18.0525 5.84 17.81 6.43625 17.81 7.31V9.23875H20.8075L20.4175 12.2662H17.81V20H22.8975C23.5063 20 24 19.5063 24 18.8962V1.10375C24 0.49375 23.5063 0 22.8962 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4_27"
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4_27"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4_27"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_4_39)">
                        <path
                          d="M22.5187 0H5.475C4.6625 0 4 0.64625 4 1.44125V18.5588C4 19.3563 4.6625 20 5.475 20H22.52C23.3337 20 24 19.3563 24 18.5588V1.44125C24 0.64625 23.3337 0 22.5187 0ZM9.9325 17.0425H6.96375V7.49875H9.93375V17.0425H9.9325ZM8.44875 6.19375C7.49625 6.19375 6.7275 5.4225 6.7275 4.4725C6.7275 3.52375 7.49625 2.7525 8.44875 2.7525C9.3975 2.7525 10.1687 3.52375 10.1687 4.4725C10.1687 5.42375 9.39875 6.19375 8.44875 6.19375ZM21.0413 17.0425H18.0775V12.4025C18.0775 11.295 18.0563 9.87125 16.5363 9.87125C14.9925 9.87125 14.7575 11.0763 14.7575 12.3213V17.0438H11.7938V7.49875H14.6362V8.8025H14.6775C15.0737 8.0525 16.0412 7.26125 17.4837 7.26125C20.485 7.26125 21.04 9.2375 21.04 11.8087V17.0425H21.0413Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4_39"
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4_39"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4_39"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_4_43)">
                        <path
                          d="M11.955 12.9737V7.02624L17.1812 9.99999L11.955 12.9737ZM23.5825 5.15499C23.3525 4.28874 22.6737 3.60624 21.8138 3.37499C20.2537 2.95499 14 2.95499 14 2.95499C14 2.95499 7.74625 2.95499 6.18625 3.37499C5.32625 3.60624 4.6475 4.28874 4.4175 5.15499C4 6.72499 4 9.99999 4 9.99999C4 9.99999 4 13.275 4.4175 14.845C4.6475 15.7112 5.32625 16.3937 6.18625 16.625C7.74625 17.045 14 17.045 14 17.045C14 17.045 20.2537 17.045 21.8138 16.625C22.6737 16.3937 23.3525 15.7112 23.5825 14.845C24 13.275 24 9.99999 24 9.99999C24 9.99999 24 6.72499 23.5825 5.15499Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4_43"
                          x="0"
                          y="2.95499"
                          width="28"
                          height="22.09"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4_43"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4_43"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-100 bottom-header desktop-view">
        <div className="w-1500">
          <div className="flex align-item">
            <div className="w-20 logo">
                <img src={Rankoptim_logo} alt="" />
            </div>
            <div className="w-60 flex align-item nav-cat">
              <ul className="flex align-item">
                <li>About</li>
                <li>Services</li>
                <li>Solutions</li>
                <li>Machines</li>
                <li>Training</li>
                <li>Resources</li>
                <li>Free Tools</li>
              </ul>
            </div>
            <div className="w-20 flex align-item login just-end">
              <div className="login-button">
                <div className="flex align-item">
                  <div className="login-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M20 15.625C20 14.7962 19.6712 14.0012 19.085 13.415C18.4987 12.8287 17.7038 12.5 16.875 12.5C14.3088 12.5 10.6912 12.5 8.125 12.5C7.29625 12.5 6.50125 12.8287 5.915 13.415C5.32875 14.0012 5 14.7962 5 15.625V18.75H20C20 18.75 20 17.6837 20 15.625ZM3.75 16.25H0C0 16.25 0 15.1837 0 13.125C0 12.2962 0.32875 11.5012 0.915 10.915C1.50125 10.3287 2.29625 10 3.125 10H8.17C8.4425 10.47 8.78875 10.8925 9.19375 11.25H8.125C5.70875 11.25 3.75 13.2087 3.75 15.625V16.25ZM12.5 3.75C14.57 3.75 16.25 5.43 16.25 7.5C16.25 9.57 14.57 11.25 12.5 11.25C10.43 11.25 8.75 9.57 8.75 7.5C8.75 5.43 10.43 3.75 12.5 3.75ZM7.6575 8.74625C7.605 8.74875 7.5525 8.75 7.5 8.75C5.43 8.75 3.75 7.07 3.75 5C3.75 2.93 5.43 1.25 7.5 1.25C8.7825 1.25 9.915 1.895 10.5912 2.8775C8.7775 3.62875 7.5 5.41625 7.5 7.5C7.5 7.93 7.555 8.34875 7.6575 8.74625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="login-text">LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-100 bottom-header desktop-view">
        <div className="w-1500">
          <div className="flex align-item">
            <div className="w-20 logo">
              <img src={Rankoptim_logo} alt="" />
            </div>
            <div className="w-60">
              <ul className="flex align-item just-cen">
                <li>About</li>
                <li>Services</li>
                <li>Solutions</li>
                <li>Machines</li>
                <li>Training</li>
                <li>Resources</li>
                <li>Free Tools</li>
              </ul>
            </div>
            <div className="w-20 flex align-item login just-end">
              <div className="login-button">
                <div className="flex align-item">
                  <div className="login-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M20 15.625C20 14.7962 19.6712 14.0012 19.085 13.415C18.4987 12.8287 17.7038 12.5 16.875 12.5C14.3088 12.5 10.6912 12.5 8.125 12.5C7.29625 12.5 6.50125 12.8287 5.915 13.415C5.32875 14.0012 5 14.7962 5 15.625V18.75H20C20 18.75 20 17.6837 20 15.625ZM3.75 16.25H0C0 16.25 0 15.1837 0 13.125C0 12.2962 0.32875 11.5012 0.915 10.915C1.50125 10.3287 2.29625 10 3.125 10H8.17C8.4425 10.47 8.78875 10.8925 9.19375 11.25H8.125C5.70875 11.25 3.75 13.2087 3.75 15.625V16.25ZM12.5 3.75C14.57 3.75 16.25 5.43 16.25 7.5C16.25 9.57 14.57 11.25 12.5 11.25C10.43 11.25 8.75 9.57 8.75 7.5C8.75 5.43 10.43 3.75 12.5 3.75ZM7.6575 8.74625C7.605 8.74875 7.5525 8.75 7.5 8.75C5.43 8.75 3.75 7.07 3.75 5C3.75 2.93 5.43 1.25 7.5 1.25C8.7825 1.25 9.915 1.895 10.5912 2.8775C8.7775 3.62875 7.5 5.41625 7.5 7.5C7.5 7.93 7.555 8.34875 7.6575 8.74625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="login-text">LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};
