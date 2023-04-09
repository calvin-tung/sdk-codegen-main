/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'

interface SomethingWentWrongGraphicProps {
  altText?: string
}

/**
 * Graphic to be used when something goes wrong on a page
 */
const SomethingWentWrongGraphicImage: React.FC<
  SomethingWentWrongGraphicProps
> = ({ altText }) => (
  <svg
    width="248"
    height="249"
    viewBox="0 0 248 249"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{altText || 'error graphic'}</title>
    <circle cx="35" cy="166.5" r="2" fill="#DADCE0" />
    <circle cx="236" cy="107.5" r="2" fill="#DADCE0" />
    <circle cx="199" cy="146.5" r="18" fill="#EA4335" />
    <circle cx="154" cy="28.5" r="9" fill="#FBBC04" />
    <circle cx="31" cy="93.5" r="9" fill="#4285F4" />
    <circle cx="136" cy="221.5" r="5" fill="#34A853" />
    <path
      d="M218.51 78C218.512 77.868 218.565 77.7421 218.659 77.6487C218.752 77.5554 218.878 77.5021 219.01 77.5V77.5C219.076 77.4993 219.141 77.5118 219.202 77.5366C219.263 77.5615 219.319 77.5983 219.365 77.6449C219.412 77.6915 219.449 77.7469 219.473 77.8078C219.498 77.8688 219.511 77.9341 219.51 78V78C219.511 78.0651 219.499 78.1297 219.475 78.1901C219.451 78.2505 219.415 78.3055 219.369 78.352C219.324 78.3984 219.269 78.4354 219.209 78.4608C219.149 78.4862 219.085 78.4996 219.02 78.5H219.01C218.879 78.4961 218.754 78.4422 218.661 78.3493C218.568 78.2563 218.514 78.1314 218.51 78V78ZM214.65 75.49C214.58 75.3771 214.558 75.2413 214.588 75.1121C214.618 74.9828 214.698 74.8707 214.81 74.8V74.8C214.924 74.7329 215.059 74.7121 215.187 74.7419C215.316 74.7717 215.428 74.8498 215.5 74.96C215.568 75.0732 215.59 75.2084 215.56 75.3371C215.53 75.4658 215.451 75.5778 215.34 75.6494V75.6494C215.259 75.7004 215.165 75.7281 215.07 75.7294V75.7294C214.985 75.7277 214.902 75.7049 214.829 75.6631C214.756 75.6213 214.694 75.5618 214.649 75.49H214.65ZM222.68 75.63C222.624 75.5957 222.575 75.5505 222.536 75.497C222.497 75.4435 222.47 75.3829 222.455 75.3186C222.44 75.2544 222.438 75.1878 222.449 75.1228C222.46 75.0577 222.485 74.9956 222.52 74.94V74.94C222.553 74.884 222.598 74.8351 222.65 74.7962C222.702 74.7573 222.762 74.7291 222.825 74.7133C222.888 74.6975 222.954 74.6944 223.019 74.7041C223.083 74.7139 223.145 74.7362 223.201 74.77V74.77C223.314 74.8399 223.395 74.9514 223.427 75.0805C223.459 75.2096 223.438 75.3461 223.371 75.4605C223.324 75.5328 223.26 75.5924 223.185 75.6343C223.11 75.6761 223.026 75.6989 222.94 75.7005V75.7005C222.849 75.702 222.758 75.6775 222.68 75.63ZM212.79 70.64C212.776 70.5763 212.774 70.5103 212.786 70.446C212.797 70.3817 212.821 70.3203 212.856 70.2654C212.892 70.2104 212.938 70.1631 212.992 70.1261C213.045 70.0892 213.106 70.0633 213.17 70.05C213.3 70.0212 213.436 70.0449 213.548 70.1162C213.661 70.1874 213.741 70.3002 213.77 70.43V70.43C213.796 70.5585 213.771 70.692 213.7 70.8022C213.629 70.9124 213.518 70.9905 213.39 71.02V71.02C213.355 71.0309 213.318 71.0376 213.281 71.04V71.04C213.165 71.04 213.054 71.0002 212.964 70.9273C212.875 70.8545 212.813 70.753 212.79 70.64V70.64ZM224.62 71C224.49 70.9706 224.377 70.8909 224.306 70.7783C224.235 70.6657 224.211 70.5294 224.24 70.3994V70.3994C224.253 70.3355 224.279 70.2749 224.316 70.2212C224.353 70.1674 224.401 70.1215 224.456 70.0861C224.511 70.0508 224.572 70.0267 224.636 70.0152C224.7 70.0038 224.766 70.0052 224.83 70.0194V70.0194C224.894 70.0325 224.956 70.0582 225.01 70.0949C225.064 70.1317 225.111 70.1788 225.147 70.2336C225.183 70.2884 225.209 70.3498 225.221 70.4143C225.234 70.4787 225.233 70.5451 225.22 70.6094V70.6094C225.195 70.7216 225.134 70.8222 225.045 70.8948C224.956 70.9674 224.845 71.0078 224.73 71.0094C224.69 71.01 224.66 71 224.62 71V71ZM212.25 65.53C212.249 65.4641 212.262 65.3988 212.287 65.3378C212.312 65.2769 212.348 65.2215 212.395 65.1749C212.441 65.1283 212.497 65.0915 212.558 65.0666C212.619 65.0418 212.684 65.0293 212.75 65.03V65.03C212.816 65.0293 212.881 65.0418 212.942 65.0666C213.003 65.0915 213.059 65.1283 213.105 65.1749C213.152 65.2215 213.189 65.2769 213.213 65.3378C213.238 65.3988 213.251 65.4641 213.25 65.53V65.53C213.251 65.5958 213.238 65.6611 213.213 65.7221C213.188 65.783 213.152 65.8384 213.105 65.8849C213.058 65.9315 213.003 65.9683 212.942 65.9932C212.881 66.0181 212.816 66.0306 212.75 66.03V66.03C212.618 66.0296 212.491 65.9768 212.397 65.8831C212.303 65.7894 212.25 65.6625 212.25 65.53V65.53ZM224.75 65.5V65.49V65.44C224.749 65.3742 224.762 65.3089 224.787 65.2479C224.812 65.187 224.849 65.1316 224.895 65.0851C224.942 65.0385 224.997 65.0017 225.058 64.9768C225.119 64.9519 225.184 64.9394 225.25 64.94C225.382 64.9406 225.509 64.9934 225.603 65.0871C225.697 65.1807 225.749 65.3076 225.75 65.44V65.47V65.5C225.751 65.5659 225.738 65.6312 225.713 65.6922C225.689 65.7531 225.652 65.8085 225.605 65.8551C225.559 65.9017 225.503 65.9385 225.442 65.9634C225.381 65.9882 225.316 66.0007 225.25 66V66C225.184 66.0007 225.119 65.9882 225.058 65.9634C224.997 65.9385 224.941 65.9017 224.895 65.8551C224.848 65.8085 224.812 65.7531 224.787 65.6922C224.762 65.6312 224.749 65.5659 224.75 65.5V65.5ZM213.16 61.01C213.096 60.9967 213.035 60.9709 212.982 60.9339C212.928 60.8969 212.882 60.8496 212.846 60.7947C212.811 60.7397 212.787 60.6783 212.775 60.614C212.764 60.5497 212.766 60.4837 212.78 60.42V60.42C212.792 60.3552 212.817 60.2935 212.854 60.2386C212.89 60.1837 212.938 60.1367 212.993 60.1004C213.048 60.064 213.109 60.039 213.174 60.027C213.239 60.0149 213.306 60.0159 213.37 60.03V60.03C213.5 60.0593 213.613 60.139 213.684 60.2515C213.755 60.3639 213.779 60.5001 213.75 60.63C213.725 60.7394 213.665 60.8374 213.578 60.9081C213.491 60.9789 213.382 61.0183 213.27 61.02V61.02C213.233 61.0221 213.196 61.0187 213.16 61.01V61.01ZM224.23 60.54C224.201 60.4101 224.225 60.2741 224.296 60.1617C224.368 60.0494 224.48 59.9697 224.61 59.94C224.674 59.9258 224.74 59.9245 224.804 59.9359C224.868 59.9474 224.93 59.9715 224.985 60.0068C225.04 60.0422 225.087 60.088 225.124 60.1418C225.161 60.1955 225.187 60.2561 225.201 60.32V60.32C225.23 60.4501 225.206 60.5863 225.134 60.6989C225.063 60.8114 224.95 60.8911 224.82 60.9206V60.9206C224.784 60.9293 224.747 60.9326 224.711 60.9306V60.9306C224.598 60.9303 224.489 60.8914 224.401 60.8203C224.314 60.7492 224.253 60.6503 224.23 60.54V60.54ZM214.78 56.25C214.724 56.2168 214.675 56.1727 214.636 56.1204C214.597 56.0681 214.568 56.0086 214.553 55.9453C214.537 55.882 214.533 55.8162 214.543 55.7516C214.553 55.6871 214.575 55.6251 214.609 55.5693V55.5693C214.679 55.4559 214.79 55.3745 214.919 55.3427C215.048 55.3109 215.185 55.3312 215.299 55.3993C215.413 55.4683 215.495 55.5797 215.527 55.7091C215.559 55.8385 215.538 55.9752 215.469 56.0893V56.0893C215.423 56.1618 215.359 56.2217 215.284 56.2636C215.209 56.3055 215.125 56.3281 215.039 56.3293V56.3293C214.947 56.3275 214.857 56.3 214.78 56.25V56.25ZM222.49 56.01H222.48C222.412 55.8955 222.392 55.7591 222.424 55.6301C222.456 55.501 222.537 55.3895 222.65 55.3195C222.762 55.2519 222.896 55.2308 223.023 55.2607C223.15 55.2906 223.261 55.3692 223.331 55.4795C223.366 55.535 223.391 55.5972 223.402 55.6622C223.413 55.7273 223.412 55.794 223.397 55.8583C223.382 55.9227 223.354 55.9834 223.315 56.0368C223.276 56.0903 223.227 56.1354 223.171 56.1695V56.1695C223.093 56.2198 223.003 56.2475 222.911 56.2495C222.826 56.2494 222.742 56.2273 222.669 56.1853C222.595 56.1433 222.533 56.0829 222.49 56.01ZM218.45 53.01C218.449 52.9436 218.461 52.8777 218.486 52.8161C218.511 52.7544 218.547 52.6983 218.594 52.6509C218.64 52.6035 218.696 52.5657 218.757 52.5398C218.818 52.5139 218.884 52.5004 218.95 52.5C219.081 52.5 219.207 52.5513 219.3 52.6429C219.394 52.7345 219.447 52.8591 219.45 52.99C219.452 53.0558 219.441 53.1213 219.417 53.1827C219.393 53.2441 219.357 53.3002 219.312 53.3476C219.266 53.3951 219.212 53.433 219.151 53.4592C219.091 53.4853 219.026 53.4992 218.96 53.5C218.828 53.5007 218.701 53.4499 218.606 53.3584C218.51 53.267 218.455 53.142 218.45 53.01V53.01Z"
      fill="#202124"
    />
    <path
      d="M49.22 230.25C49.1511 230.252 49.0826 230.239 49.02 230.21C48.9589 230.186 48.9042 230.148 48.86 230.1C48.7694 230.006 48.7191 229.88 48.72 229.75C48.7238 229.62 48.7734 229.496 48.86 229.399C48.9557 229.308 49.0828 229.257 49.215 229.257C49.3472 229.257 49.4743 229.308 49.57 229.399C49.6176 229.444 49.6551 229.499 49.68 229.559C49.7028 229.62 49.7163 229.684 49.72 229.749C49.7172 229.881 49.6634 230.007 49.57 230.099C49.5255 230.148 49.4713 230.186 49.411 230.212C49.3507 230.238 49.2856 230.251 49.22 230.25Z"
      fill="#202124"
    />
    <path
      d="M47.16 233.31C47.1034 233.277 47.0537 233.234 47.0139 233.182C46.9742 233.13 46.9451 233.071 46.9284 233.007C46.9116 232.944 46.9076 232.878 46.9164 232.814C46.9253 232.749 46.9469 232.686 46.98 232.63C47.0119 232.573 47.0549 232.522 47.1064 232.481C47.158 232.441 47.2171 232.411 47.2803 232.393C47.3436 232.375 47.4097 232.37 47.4749 232.378C47.5401 232.386 47.603 232.407 47.66 232.44C47.7745 232.508 47.8582 232.618 47.8936 232.747C47.929 232.875 47.9134 233.013 47.85 233.13C47.8027 233.204 47.7375 233.264 47.6607 233.306C47.5838 233.348 47.4976 233.37 47.41 233.37C47.3232 233.369 47.2378 233.349 47.16 233.31Z"
      fill="#202124"
    />
    <path
      d="M45.6099 236.5C45.5442 236.502 45.479 236.489 45.4199 236.46C45.3558 236.436 45.2977 236.399 45.2499 236.35C45.2052 236.305 45.171 236.25 45.1499 236.19C45.1235 236.13 45.1099 236.065 45.1099 236C45.1099 235.935 45.1235 235.87 45.1499 235.81C45.1713 235.75 45.2054 235.695 45.2499 235.65C45.3456 235.559 45.4727 235.508 45.6049 235.508C45.7371 235.508 45.8642 235.559 45.9599 235.65C46.0075 235.695 46.045 235.749 46.0699 235.81C46.0982 235.869 46.1119 235.934 46.1099 236C46.1065 236.132 46.0528 236.257 45.9597 236.35C45.8667 236.443 45.7414 236.497 45.6099 236.5Z"
      fill="#202124"
    />
    <path
      d="M52.8201 224C52.7547 223.999 52.6901 223.986 52.6301 223.96C52.57 223.934 52.5156 223.897 52.4701 223.85C52.3802 223.756 52.3301 223.63 52.3301 223.5C52.3301 223.37 52.3802 223.244 52.4701 223.15C52.5141 223.102 52.5689 223.064 52.6301 223.041C52.7367 222.993 52.8568 222.984 52.9694 223.016C53.0819 223.047 53.1796 223.118 53.2453 223.215C53.311 223.311 53.3404 223.428 53.3285 223.545C53.3166 223.661 53.264 223.769 53.1801 223.851C53.1359 223.899 53.0811 223.937 53.0201 223.961C52.9573 223.989 52.8889 224.003 52.8201 224Z"
      fill="#202124"
    />
    <path
      d="M50.5901 220.62C50.557 220.564 50.5354 220.501 50.5265 220.436C50.5177 220.371 50.5217 220.305 50.5385 220.242C50.5552 220.179 50.5843 220.12 50.624 220.068C50.6638 220.016 50.7134 219.972 50.7701 219.939C50.827 219.906 50.89 219.885 50.9552 219.877C51.0204 219.869 51.0867 219.874 51.15 219.891C51.2134 219.909 51.2725 219.939 51.324 219.98C51.3756 220.021 51.4184 220.072 51.4501 220.129C51.4832 220.186 51.5048 220.248 51.5137 220.313C51.5225 220.378 51.5185 220.444 51.5017 220.507C51.485 220.57 51.4559 220.629 51.4162 220.681C51.3764 220.733 51.3267 220.777 51.2701 220.809C51.1928 220.849 51.107 220.87 51.0201 220.87C50.9327 220.87 50.8469 220.847 50.7714 220.803C50.6958 220.759 50.6333 220.696 50.5901 220.62Z"
      fill="#202124"
    />
    <path
      d="M49.2199 217.75C49.1511 217.752 49.0826 217.739 49.0199 217.71C48.9589 217.686 48.9041 217.649 48.8599 217.6C48.7693 217.506 48.7191 217.381 48.7199 217.25C48.7179 217.184 48.7316 217.119 48.7599 217.06C48.7813 217 48.8154 216.945 48.8599 216.9C48.9556 216.809 49.0827 216.758 49.2149 216.758C49.3471 216.758 49.4742 216.809 49.5699 216.9C49.6175 216.945 49.655 217 49.6799 217.06C49.7037 217.121 49.7172 217.185 49.7199 217.25C49.7209 217.316 49.708 217.381 49.6822 217.441C49.6563 217.501 49.6181 217.555 49.5699 217.6C49.5244 217.647 49.4701 217.684 49.41 217.71C49.3499 217.736 49.2853 217.749 49.2199 217.75Z"
      fill="#202124"
    />
    <path
      d="M45.6101 224C45.5432 224 45.4768 223.987 45.415 223.961C45.3532 223.935 45.2972 223.898 45.2501 223.85C45.1602 223.756 45.1101 223.63 45.1101 223.5C45.1101 223.37 45.1602 223.244 45.2501 223.15C45.2976 223.101 45.3558 223.064 45.4201 223.041C45.5108 223.003 45.6106 222.994 45.7067 223.013C45.8028 223.033 45.891 223.08 45.9601 223.15C46.0074 223.195 46.0451 223.249 46.0709 223.31C46.0966 223.37 46.1099 223.435 46.1099 223.5C46.1099 223.565 46.0966 223.63 46.0709 223.69C46.0451 223.75 46.0074 223.805 45.9601 223.85C45.9146 223.897 45.8602 223.934 45.8001 223.96C45.7401 223.986 45.6755 223.999 45.6101 224Z"
      fill="#202124"
    />
    <path
      d="M48.72 223.5C48.7193 223.434 48.7318 223.369 48.7567 223.308C48.7816 223.247 48.8184 223.192 48.865 223.145C48.9115 223.098 48.9669 223.062 49.0279 223.037C49.0888 223.012 49.1542 222.999 49.22 223C49.3525 223 49.4795 223.053 49.5732 223.147C49.6669 223.241 49.7197 223.368 49.72 223.5C49.7197 223.633 49.6669 223.76 49.5732 223.853C49.4795 223.947 49.3525 224 49.22 224C49.1542 224.001 49.0888 223.988 49.0279 223.963C48.9669 223.938 48.9115 223.902 48.865 223.855C48.8184 223.808 48.7816 223.753 48.7567 223.692C48.7318 223.631 48.7193 223.566 48.72 223.5Z"
      fill="#202124"
    />
    <path
      d="M50.7699 227.06C50.7132 227.027 50.6636 226.984 50.6238 226.932C50.584 226.88 50.555 226.821 50.5382 226.757C50.5215 226.694 50.5174 226.628 50.5263 226.564C50.5352 226.499 50.5568 226.436 50.5899 226.38C50.6219 226.323 50.6649 226.272 50.7164 226.232C50.768 226.191 50.8271 226.161 50.8903 226.143C50.9535 226.126 51.0196 226.121 51.0848 226.129C51.15 226.137 51.2129 226.157 51.2699 226.19C51.3266 226.223 51.3762 226.266 51.4159 226.318C51.4557 226.37 51.4847 226.43 51.5015 226.493C51.5182 226.556 51.5222 226.622 51.5134 226.687C51.5046 226.752 51.483 226.814 51.4499 226.871C51.4068 226.947 51.3442 227.01 51.2687 227.054C51.1931 227.098 51.1073 227.121 51.0199 227.121C50.9331 227.12 50.8476 227.099 50.7699 227.06Z"
      fill="#202124"
    />
    <path
      d="M38.3899 211.5C38.3243 211.502 38.2591 211.489 38.1999 211.46C38.1388 211.436 38.0841 211.399 38.0399 211.35C37.9925 211.305 37.9546 211.251 37.9288 211.19C37.903 211.13 37.8896 211.065 37.8896 211C37.8896 210.935 37.903 210.87 37.9288 210.81C37.9546 210.749 37.9925 210.695 38.0399 210.65C38.1356 210.559 38.2627 210.508 38.3949 210.508C38.5271 210.508 38.6542 210.559 38.7499 210.65C38.8395 210.745 38.8894 210.87 38.8894 211C38.8894 211.13 38.8395 211.255 38.7499 211.35C38.702 211.399 38.644 211.436 38.5799 211.46C38.5208 211.489 38.4556 211.502 38.3899 211.5Z"
      fill="#202124"
    />
    <path
      d="M41.5 211C41.4993 210.934 41.5118 210.869 41.5367 210.808C41.5616 210.747 41.5984 210.691 41.6449 210.645C41.6915 210.598 41.7469 210.562 41.8079 210.537C41.8688 210.512 41.9342 210.499 42 210.5C42.0659 210.499 42.1312 210.512 42.1921 210.537C42.2531 210.562 42.3085 210.598 42.355 210.645C42.4016 210.692 42.4384 210.747 42.4633 210.808C42.4882 210.869 42.5007 210.934 42.5 211C42.5007 211.066 42.4882 211.131 42.4633 211.192C42.4384 211.253 42.4016 211.308 42.355 211.355C42.3085 211.402 42.2531 211.438 42.1921 211.463C42.1312 211.488 42.0659 211.501 42 211.5C41.9342 211.501 41.8688 211.488 41.8079 211.463C41.7469 211.439 41.6915 211.402 41.6449 211.355C41.5984 211.309 41.5616 211.253 41.5367 211.192C41.5118 211.131 41.4993 211.066 41.5 211Z"
      fill="#202124"
    />
    <path
      d="M45.6101 211.5C45.5444 211.502 45.479 211.49 45.4185 211.464C45.3581 211.438 45.304 211.399 45.2601 211.35C45.212 211.305 45.1737 211.251 45.1479 211.191C45.122 211.131 45.1092 211.066 45.1101 211C45.1078 210.934 45.1215 210.869 45.1501 210.81C45.1714 210.748 45.2095 210.692 45.2601 210.65C45.3022 210.599 45.3576 210.561 45.4201 210.541C45.5419 210.491 45.6783 210.491 45.8001 210.541C45.8626 210.561 45.918 210.599 45.9601 210.65C46.0082 210.695 46.0463 210.749 46.0722 210.809C46.098 210.87 46.1109 210.935 46.1101 211.001C46.1112 211.066 46.0975 211.131 46.0701 211.19C46.0491 211.253 46.011 211.308 45.9601 211.35C45.9155 211.398 45.8613 211.436 45.801 211.462C45.7407 211.488 45.6757 211.501 45.6101 211.5Z"
      fill="#202124"
    />
    <path
      d="M43.55 214.56C43.4367 214.491 43.3547 214.38 43.3211 214.252C43.2876 214.123 43.3051 213.986 43.37 213.871C43.4376 213.758 43.5464 213.676 43.6734 213.642C43.8003 213.609 43.9354 213.626 44.05 213.69C44.1072 213.722 44.1575 213.765 44.198 213.817C44.2385 213.869 44.2684 213.928 44.2861 213.991C44.3037 214.054 44.3088 214.12 44.3008 214.185C44.2929 214.25 44.2723 214.313 44.24 214.371C44.1947 214.447 44.1303 214.51 44.0531 214.554C43.976 214.598 43.8887 214.621 43.8 214.621C43.7132 214.62 43.6277 214.599 43.55 214.56Z"
      fill="#202124"
    />
    <path
      d="M42 217.75C41.8684 217.747 41.7432 217.693 41.6501 217.6C41.5571 217.507 41.5033 217.382 41.5 217.25C41.4977 217.184 41.5115 217.119 41.54 217.06C41.5612 216.998 41.5992 216.942 41.65 216.9C41.6921 216.849 41.7475 216.811 41.81 216.791C41.9007 216.753 42.0005 216.744 42.0966 216.763C42.1928 216.783 42.281 216.83 42.35 216.9C42.3975 216.945 42.4353 216.999 42.4611 217.06C42.487 217.12 42.5003 217.185 42.5003 217.25C42.5003 217.316 42.487 217.38 42.4611 217.44C42.4353 217.501 42.3975 217.555 42.35 217.6C42.3078 217.651 42.2525 217.689 42.19 217.71C42.1309 217.739 42.0656 217.752 42 217.75Z"
      fill="#202124"
    />
    <path
      d="M46.9799 214.37C46.9469 214.313 46.9253 214.251 46.9164 214.186C46.9076 214.121 46.9116 214.055 46.9284 213.992C46.9451 213.929 46.9742 213.87 47.0139 213.818C47.0536 213.766 47.1033 213.722 47.1599 213.689C47.2742 213.624 47.4097 213.606 47.5371 213.64C47.6644 213.674 47.7732 213.756 47.8399 213.87C47.9074 213.985 47.9263 214.123 47.8926 214.252C47.8588 214.381 47.7752 214.492 47.6599 214.559C47.5827 214.599 47.4969 214.62 47.4099 214.62C47.3225 214.62 47.2367 214.597 47.1612 214.553C47.0856 214.509 47.0231 214.446 46.9799 214.37Z"
      fill="#202124"
    />
    <path
      d="M31.18 211.5C31.1127 211.502 31.0459 211.49 30.9838 211.464C30.9217 211.438 30.8659 211.399 30.82 211.35C30.7294 211.256 30.6792 211.131 30.68 211C30.6794 210.935 30.6895 210.871 30.71 210.81C30.7348 210.749 30.7723 210.695 30.82 210.65C30.8907 210.58 30.9806 210.532 31.0784 210.512C31.1762 210.493 31.2776 210.502 31.37 210.54C31.4312 210.563 31.486 210.601 31.53 210.649C31.6231 210.743 31.6768 210.868 31.68 211C31.6763 211.065 31.6628 211.129 31.64 211.19C31.6153 211.25 31.5778 211.305 31.53 211.35C31.4849 211.397 31.4306 211.435 31.3704 211.461C31.3103 211.487 31.2455 211.5 31.18 211.5Z"
      fill="#202124"
    />
    <path
      d="M34.28 211C34.2804 210.868 34.3332 210.741 34.4269 210.647C34.5205 210.553 34.6475 210.5 34.78 210.5C34.8459 210.499 34.9112 210.512 34.9722 210.537C35.0332 210.562 35.0886 210.598 35.1351 210.645C35.1817 210.691 35.2185 210.747 35.2434 210.808C35.2683 210.869 35.2807 210.934 35.28 211C35.2807 211.066 35.2683 211.131 35.2434 211.192C35.2185 211.253 35.1817 211.309 35.1351 211.355C35.0886 211.402 35.0332 211.439 34.9722 211.463C34.9112 211.488 34.8459 211.501 34.78 211.5C34.6475 211.5 34.5205 211.447 34.4269 211.353C34.3332 211.26 34.2804 211.133 34.28 211Z"
      fill="#202124"
    />
    <path
      d="M34.78 217.75C34.7144 217.751 34.6494 217.738 34.5891 217.712C34.5288 217.686 34.4746 217.648 34.43 217.6C34.3366 217.507 34.2828 217.382 34.28 217.25C34.2827 217.185 34.2963 217.121 34.32 217.06C34.345 216.999 34.3824 216.945 34.43 216.9C34.474 216.851 34.5288 216.814 34.59 216.79C34.7153 216.74 34.8548 216.74 34.98 216.79C35.0413 216.813 35.0962 216.851 35.14 216.899C35.1844 216.947 35.2214 217.001 35.25 217.059C35.2704 217.121 35.2806 217.185 35.28 217.249C35.2811 217.38 35.2308 217.506 35.14 217.599C35.094 217.65 35.0354 217.688 34.97 217.709C34.9109 217.738 34.8457 217.752 34.78 217.75Z"
      fill="#202124"
    />
    <path
      d="M32.55 214.37C32.517 214.314 32.4955 214.251 32.4867 214.186C32.4779 214.122 32.482 214.056 32.4987 213.993C32.5154 213.929 32.5445 213.87 32.5842 213.818C32.6239 213.766 32.6735 213.723 32.73 213.69C32.8444 213.625 32.9798 213.607 33.107 213.641C33.2342 213.675 33.343 213.757 33.41 213.871C33.4774 213.986 33.4963 214.123 33.4626 214.253C33.4288 214.382 33.3452 214.492 33.23 214.56C33.1524 214.599 33.0669 214.62 32.98 214.621C32.8926 214.621 32.8068 214.597 32.7313 214.553C32.6557 214.509 32.5932 214.446 32.55 214.37Z"
      fill="#202124"
    />
    <path
      d="M39.95 220.81C39.8356 220.742 39.752 220.632 39.7166 220.503C39.6812 220.375 39.6967 220.238 39.76 220.12C39.8293 220.007 39.9399 219.925 40.0686 219.891C40.1972 219.857 40.3339 219.875 40.45 219.94C40.5633 220.009 40.6453 220.12 40.6789 220.249C40.7124 220.377 40.6949 220.514 40.63 220.63C40.5834 220.704 40.5185 220.765 40.4414 220.807C40.3643 220.849 40.2777 220.871 40.19 220.87C40.1062 220.87 40.0238 220.85 39.95 220.81Z"
      fill="#202124"
    />
    <path
      d="M38.3899 224C38.3243 224.002 38.2591 223.989 38.1999 223.96C38.1388 223.936 38.0841 223.899 38.0399 223.85C37.9918 223.805 37.9536 223.751 37.9277 223.691C37.9019 223.631 37.889 223.566 37.8899 223.5C37.8918 223.401 37.9226 223.305 37.9785 223.224C38.0345 223.142 38.113 223.079 38.2045 223.042C38.296 223.004 38.3964 222.995 38.4934 223.014C38.5903 223.033 38.6795 223.08 38.7499 223.149C38.8403 223.244 38.8905 223.369 38.8899 223.5C38.8859 223.629 38.8363 223.753 38.7499 223.85C38.702 223.899 38.644 223.936 38.5799 223.96C38.5208 223.989 38.4556 224.002 38.3899 224Z"
      fill="#202124"
    />
    <path
      d="M41.5 223.5C41.4993 223.434 41.5118 223.369 41.5367 223.308C41.5616 223.247 41.5984 223.191 41.6449 223.145C41.6915 223.098 41.7469 223.062 41.8079 223.037C41.8688 223.012 41.9342 222.999 42 223C42.0659 222.999 42.1312 223.012 42.1921 223.037C42.2531 223.062 42.3085 223.098 42.355 223.145C42.4016 223.192 42.4384 223.247 42.4633 223.308C42.4882 223.369 42.5007 223.434 42.5 223.5C42.5007 223.566 42.4882 223.631 42.4633 223.692C42.4384 223.753 42.4016 223.808 42.355 223.855C42.3085 223.902 42.2531 223.938 42.1921 223.963C42.1312 223.988 42.0659 224.001 42 224C41.9342 224.001 41.8688 223.988 41.8079 223.963C41.7469 223.939 41.6915 223.902 41.6449 223.855C41.5984 223.809 41.5616 223.753 41.5367 223.692C41.5118 223.631 41.4993 223.566 41.5 223.5Z"
      fill="#202124"
    />
    <path
      d="M36.1501 220.63C36.0869 220.513 36.0713 220.375 36.1067 220.247C36.1421 220.118 36.2257 220.008 36.3401 219.94C36.4545 219.875 36.5898 219.858 36.717 219.891C36.8441 219.925 36.953 220.008 37.0201 220.121C37.0873 220.236 37.1062 220.373 37.0724 220.503C37.0387 220.632 36.9552 220.742 36.8401 220.81C36.7624 220.849 36.6769 220.87 36.5901 220.871C36.5027 220.869 36.417 220.847 36.3403 220.805C36.2636 220.763 36.1983 220.703 36.1501 220.63Z"
      fill="#202124"
    />
    <path
      d="M42 230.25C41.9344 230.252 41.8691 230.239 41.81 230.21C41.7476 230.189 41.6923 230.151 41.65 230.1C41.599 230.058 41.5609 230.003 41.54 229.94C41.5114 229.881 41.4977 229.816 41.5 229.751C41.4988 229.685 41.5124 229.62 41.54 229.561C41.5612 229.498 41.5993 229.443 41.65 229.401C41.7437 229.309 41.8693 229.258 42 229.258C42.1307 229.258 42.2563 229.309 42.35 229.401C42.4007 229.443 42.4388 229.498 42.46 229.561C42.4873 229.62 42.501 229.685 42.5 229.751C42.5009 229.816 42.488 229.881 42.4622 229.941C42.4364 230.002 42.3981 230.056 42.35 230.101C42.3078 230.151 42.2525 230.189 42.19 230.211C42.1308 230.239 42.0656 230.252 42 230.25Z"
      fill="#202124"
    />
    <path
      d="M39.7601 226.88C39.6969 226.763 39.6815 226.625 39.7168 226.497C39.7522 226.368 39.8358 226.258 39.9501 226.19C40.0071 226.157 40.0701 226.137 40.1352 226.129C40.2004 226.121 40.2665 226.126 40.3297 226.143C40.3929 226.161 40.452 226.191 40.5036 226.232C40.5551 226.272 40.5981 226.323 40.6301 226.38C40.6946 226.494 40.7118 226.63 40.6782 226.757C40.6446 226.884 40.5627 226.992 40.4501 227.06C40.3724 227.099 40.2869 227.119 40.2001 227.12C40.1121 227.122 40.0251 227.101 39.9479 227.059C39.8707 227.017 39.8059 226.955 39.7601 226.88Z"
      fill="#202124"
    />
    <path
      d="M43.37 233.13C43.3029 233.015 43.2842 232.877 43.3179 232.748C43.3516 232.619 43.435 232.508 43.55 232.44C43.6668 232.374 43.8049 232.357 43.9341 232.393C44.0633 232.429 44.1733 232.514 44.24 232.63C44.2723 232.687 44.293 232.75 44.301 232.815C44.3089 232.88 44.3039 232.946 44.2862 233.01C44.2686 233.073 44.2386 233.132 44.1981 233.183C44.1575 233.235 44.1072 233.278 44.05 233.31C43.9731 233.351 43.8871 233.372 43.8 233.371C43.7138 233.37 43.6291 233.348 43.5539 233.306C43.4786 233.264 43.4154 233.203 43.37 233.13Z"
      fill="#202124"
    />
    <path
      d="M49 24.7492C48.9345 24.7504 48.8695 24.7367 48.81 24.7092C48.7475 24.6882 48.6921 24.6501 48.65 24.5992C48.6019 24.5547 48.5636 24.5005 48.5378 24.4402C48.5119 24.3799 48.4991 24.3148 48.5 24.2492C48.4976 24.1836 48.5113 24.1183 48.54 24.0592C48.5934 23.9389 48.6896 23.8426 48.81 23.7892C48.9008 23.7518 49.0006 23.7423 49.0968 23.7619C49.193 23.7815 49.2812 23.8293 49.35 23.8992C49.4009 23.9413 49.439 23.9967 49.46 24.0592C49.4885 24.1184 49.5022 24.1836 49.5 24.2492C49.4965 24.3807 49.4427 24.5058 49.3496 24.5989C49.2566 24.6919 49.1315 24.7457 49 24.7492Z"
      fill="#202124"
    />
    <path
      d="M50.3701 27.6292C50.3051 27.5133 50.2875 27.3766 50.3211 27.248C50.3547 27.1194 50.4367 27.0087 50.5501 26.9392C50.666 26.8741 50.8027 26.8565 50.9314 26.8901C51.0601 26.9236 51.1707 27.0058 51.2401 27.1192C51.3058 27.2351 51.3237 27.3721 51.2901 27.501C51.2565 27.6299 51.174 27.7407 51.0601 27.8097C50.9798 27.8524 50.8909 27.8763 50.8001 27.8797C50.7127 27.8796 50.6269 27.8563 50.5514 27.8123C50.4759 27.7683 50.4133 27.7052 50.3701 27.6292Z"
      fill="#202124"
    />
    <path
      d="M52.6099 30.9993C52.5443 31.0014 52.4791 30.9877 52.4199 30.9593C52.3556 30.9361 52.2974 30.8985 52.2499 30.8493C52.1631 30.753 52.1135 30.6289 52.1099 30.4993C52.1074 30.4337 52.1212 30.3684 52.1499 30.3093C52.1711 30.2493 52.2053 30.1947 52.2499 30.1493C52.2974 30.1001 52.3556 30.0625 52.4199 30.0393C52.5106 30.0016 52.6105 29.9919 52.7068 30.0115C52.803 30.0311 52.8912 30.0791 52.9599 30.1493C53.0076 30.1941 53.0451 30.2487 53.0699 30.3093C53.0964 30.3692 53.11 30.4339 53.11 30.4993C53.11 30.5648 53.0964 30.6295 53.0699 30.6893C53.0453 30.75 53.0078 30.8046 52.9599 30.8493C52.9178 30.9001 52.8624 30.9382 52.7999 30.9593C52.7404 30.9867 52.6754 31.0004 52.6099 30.9993Z"
      fill="#202124"
    />
    <path
      d="M45.3899 30.9993C45.3243 31.0002 45.2593 30.9873 45.199 30.9615C45.1387 30.9356 45.0845 30.8974 45.0399 30.8493C44.992 30.8046 44.9545 30.75 44.9299 30.6893C44.907 30.6284 44.8936 30.5643 44.8899 30.4993C44.8925 30.4342 44.906 30.3699 44.9299 30.3093C44.9547 30.2487 44.9922 30.1942 45.0399 30.1493C45.1085 30.0789 45.1967 30.0308 45.293 30.0112C45.3893 29.9916 45.4892 30.0014 45.5799 30.0393C45.7003 30.0927 45.7965 30.1889 45.8499 30.3093C45.8786 30.3684 45.8924 30.4337 45.8899 30.4993C45.8913 30.5649 45.8776 30.6299 45.8499 30.6893C45.8291 30.752 45.791 30.8075 45.7399 30.8493C45.6953 30.8974 45.6411 30.9356 45.5808 30.9615C45.5205 30.9873 45.4555 31.0002 45.3899 30.9993Z"
      fill="#202124"
    />
    <path
      d="M46.95 27.8092C46.8332 27.7428 46.7476 27.6328 46.712 27.5033C46.6764 27.3738 46.6936 27.2355 46.76 27.1187C46.8293 27.0053 46.94 26.9231 47.0687 26.8896C47.1973 26.856 47.334 26.8736 47.45 26.9387C47.5067 26.9713 47.5564 27.0148 47.5961 27.0668C47.6359 27.1187 47.665 27.178 47.6818 27.2412C47.6985 27.3044 47.7025 27.3703 47.6937 27.4351C47.6848 27.4999 47.6631 27.5623 47.63 27.6187C47.5889 27.6972 47.5271 27.7629 47.4513 27.8088C47.3755 27.8546 47.2886 27.8788 47.2 27.8787C47.1121 27.8768 47.0262 27.8529 46.95 27.8092Z"
      fill="#202124"
    />
    <path
      d="M48.5 30.4993C48.4993 30.4334 48.5118 30.3681 48.5367 30.3071C48.5616 30.2462 48.5984 30.1908 48.6449 30.1442C48.6915 30.0976 48.7469 30.0608 48.8079 30.0359C48.8688 30.0111 48.9342 29.9986 49 29.9993C49.0659 29.9986 49.1312 30.0111 49.1921 30.036C49.2531 30.0609 49.3085 30.0977 49.355 30.1443C49.4016 30.1908 49.4384 30.2462 49.4633 30.3072C49.4882 30.3681 49.5007 30.4335 49.5 30.4993C49.5006 30.5651 49.4881 30.6304 49.4632 30.6914C49.4383 30.7523 49.4015 30.8077 49.3549 30.8542C49.3084 30.9008 49.253 30.9376 49.1921 30.9625C49.1312 30.9874 49.0659 30.9999 49 30.9993C48.9342 31 48.8689 30.9875 48.8079 30.9626C48.747 30.9377 48.6916 30.9009 48.645 30.8543C48.5985 30.8077 48.5616 30.7524 48.5368 30.6914C48.5119 30.6305 48.4994 30.5651 48.5 30.4993Z"
      fill="#202124"
    />
    <path
      d="M46.7599 33.8692C46.6967 33.7534 46.6812 33.6174 46.7167 33.4903C46.7521 33.3632 46.8358 33.255 46.9499 33.1886C47.0653 33.1237 47.2017 33.1072 47.3293 33.1428C47.4568 33.1784 47.5649 33.2633 47.6299 33.3786C47.6944 33.4931 47.7117 33.6282 47.678 33.7552C47.6444 33.8822 47.5626 33.9911 47.4499 34.0586C47.3728 34.1002 47.2874 34.1241 47.1999 34.1286C47.1105 34.1268 47.023 34.102 46.9459 34.0566C46.8689 34.0111 46.8048 33.9466 46.7599 33.8692Z"
      fill="#202124"
    />
    <path
      d="M49.0001 37.2493C48.8685 37.246 48.7433 37.1922 48.6502 37.0991C48.5572 37.0061 48.5034 36.8808 48.5001 36.7493C48.4988 36.6837 48.5125 36.6188 48.5401 36.5593C48.5612 36.4968 48.5993 36.4414 48.6501 36.3993C48.7438 36.3081 48.8693 36.2571 49.0001 36.2571C49.1308 36.2571 49.2564 36.3081 49.3501 36.3993C49.4008 36.4415 49.4389 36.4968 49.4601 36.5593C49.4874 36.6188 49.5011 36.6838 49.5001 36.7493C49.5021 36.8148 49.4884 36.8797 49.4601 36.9388C49.4391 37.0014 49.401 37.0568 49.3501 37.0988C49.3056 37.1471 49.2515 37.1855 49.1912 37.2114C49.1308 37.2374 49.0657 37.2503 49.0001 37.2493Z"
      fill="#202124"
    />
    <path
      d="M50.5601 34.0593C50.5021 34.028 50.4509 33.9854 50.4098 33.9339C50.3686 33.8824 50.3382 33.8232 50.3204 33.7598C50.3027 33.6963 50.2978 33.6299 50.3063 33.5645C50.3147 33.4992 50.3363 33.4362 50.3696 33.3793C50.4015 33.322 50.4445 33.2715 50.4961 33.2309C50.5477 33.1903 50.6068 33.1603 50.67 33.1426C50.7332 33.1249 50.7993 33.12 50.8644 33.128C50.9296 33.136 50.9925 33.1568 51.0496 33.1893C51.107 33.2213 51.1575 33.2643 51.1982 33.3159C51.2389 33.3675 51.2689 33.4267 51.2866 33.49C51.3043 33.5532 51.3092 33.6194 51.3011 33.6846C51.2931 33.7499 51.2721 33.8128 51.2396 33.8699C51.1948 33.9475 51.1308 34.0121 51.0537 34.0577C50.9766 34.1032 50.8891 34.1281 50.7996 34.1299C50.7151 34.1265 50.6329 34.1023 50.5601 34.0593Z"
      fill="#202124"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55 66.5C55 65.9477 55.4477 65.5 56 65.5H192C192.552 65.5 193 65.9477 193 66.5V174.5C193 179.471 188.971 183.5 184 183.5H64C59.0294 183.5 55 179.471 55 174.5V66.5ZM57 67.5V174.5C57 178.366 60.134 181.5 64 181.5H184C187.866 181.5 191 178.366 191 174.5V67.5H57ZM75 79.5C71.6863 79.5 69 82.1863 69 85.5C69 88.8137 71.6863 91.5 75 91.5C78.3137 91.5 81 88.8137 81 85.5C81 82.1863 78.3137 79.5 75 79.5ZM67 85.5C67 81.0817 70.5817 77.5 75 77.5C79.4183 77.5 83 81.0817 83 85.5C83 89.9183 79.4183 93.5 75 93.5C70.5817 93.5 67 89.9183 67 85.5ZM94 79.5C90.6863 79.5 88 82.1863 88 85.5C88 88.8137 90.6863 91.5 94 91.5C97.3137 91.5 100 88.8137 100 85.5C100 82.1863 97.3137 79.5 94 79.5ZM86 85.5C86 81.0817 89.5817 77.5 94 77.5C98.4183 77.5 102 81.0817 102 85.5C102 89.9183 98.4183 93.5 94 93.5C89.5817 93.5 86 89.9183 86 85.5ZM113 79.5C109.686 79.5 107 82.1863 107 85.5C107 88.8137 109.686 91.5 113 91.5C116.314 91.5 119 88.8137 119 85.5C119 82.1863 116.314 79.5 113 79.5ZM105 85.5C105 81.0817 108.582 77.5 113 77.5C117.418 77.5 121 81.0817 121 85.5C121 89.9183 117.418 93.5 113 93.5C108.582 93.5 105 89.9183 105 85.5ZM96.3138 106.773C96.7155 106.394 97.3484 106.412 97.7274 106.814L122.727 133.314C123.091 133.699 123.091 134.301 122.727 134.686L97.7274 161.186C97.3484 161.588 96.7155 161.606 96.3138 161.227C95.912 160.848 95.8936 160.216 96.2726 159.814L120.625 134L96.2726 108.186C95.8936 107.784 95.9121 107.152 96.3138 106.773ZM126 158.5C126 157.948 126.448 157.5 127 157.5H156C156.552 157.5 157 157.948 157 158.5C157 159.052 156.552 159.5 156 159.5H127C126.448 159.5 126 159.052 126 158.5Z"
      fill="#202124"
    />
  </svg>
)

export const SomethingWentWrongGraphic = React.memo(
  SomethingWentWrongGraphicImage
)