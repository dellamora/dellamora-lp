/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../../application/domain/components";
/* import { Container } from "./styles"; */

const Twitter: Icon = ({ fill, onClick }): JSX.Element => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9912 1.95021C22.9913 1.77357 22.9446 1.60007 22.8559 1.44735C22.7671 1.29464 22.6395 1.16817 22.4859 1.08084C22.3324 0.993502 22.1585 0.948416 21.9819 0.95017C21.8052 0.951925 21.6322 1.00046 21.4805 1.09083C20.8951 1.43921 20.265 1.70601 19.6075 1.88383C18.6684 1.07806 17.4708 0.637129 16.2335 0.641636C14.876 0.643198 13.5723 1.17223 12.5977 2.11702C11.623 3.06181 11.0536 4.3484 11.0098 5.70512C8.33381 5.27838 5.90846 3.88164 4.19628 1.78126C4.09312 1.65609 3.96136 1.55757 3.81214 1.494C3.66291 1.43043 3.50059 1.40368 3.33886 1.41601C3.17722 1.42932 3.02125 1.4818 2.88445 1.56892C2.74765 1.65603 2.63413 1.77516 2.5537 1.91601C2.14123 2.63582 1.90433 3.44276 1.86225 4.27131C1.82017 5.09986 1.97409 5.92666 2.31151 6.68456L2.30956 6.68651C2.15791 6.77991 2.03275 6.91066 1.94606 7.06625C1.85938 7.22185 1.81406 7.39708 1.81444 7.57519C1.8126 7.72211 1.82142 7.86898 1.84081 8.01464C1.94295 9.2729 2.50059 10.4507 3.40917 11.3271C3.34753 11.4446 3.30991 11.5731 3.29851 11.7052C3.28711 11.8373 3.30215 11.9704 3.34276 12.0967C3.73887 13.3308 4.58126 14.3727 5.70507 15.0185C4.56331 15.46 3.33049 15.614 2.11522 15.4668C1.89029 15.4386 1.66245 15.4876 1.46907 15.6059C1.27569 15.7242 1.12825 15.9047 1.05093 16.1178C0.973623 16.3309 0.97103 16.5639 1.04358 16.7787C1.11613 16.9935 1.25952 17.1772 1.45022 17.2998C3.54031 18.646 5.9739 19.3617 8.45999 19.3613C11.2792 19.393 14.03 18.4921 16.2842 16.7988C18.5385 15.1054 20.1699 12.7145 20.9248 9.99801C21.2779 8.81464 21.4581 7.58648 21.46 6.35157C21.46 6.28614 21.46 6.21876 21.459 6.15138C21.9811 5.58831 22.3856 4.92668 22.6487 4.20527C22.9118 3.48387 23.0282 2.7172 22.9912 1.95021ZM19.6846 5.16212C19.5194 5.35746 19.4358 5.60891 19.4512 5.86427C19.4609 6.02927 19.4599 6.19527 19.4599 6.35157C19.4579 7.39511 19.3049 8.43287 19.0058 9.43263C18.3893 11.744 17.015 13.7817 15.1029 15.2192C13.1909 16.6568 10.8517 17.4111 8.45999 17.3613C7.60087 17.3616 6.74471 17.2606 5.90921 17.0606C6.97462 16.7172 7.9708 16.1879 8.85159 15.4971C9.01381 15.3693 9.13254 15.1945 9.19148 14.9967C9.25041 14.7988 9.24667 14.5875 9.18076 14.3918C9.11486 14.1961 8.99002 14.0257 8.82337 13.9038C8.65672 13.7819 8.45643 13.7145 8.24999 13.7109C7.41882 13.698 6.62512 13.363 6.03612 12.7764C6.18554 12.7481 6.33398 12.7129 6.48144 12.6709C6.69745 12.6094 6.88648 12.477 7.0181 12.295C7.14972 12.1131 7.21626 11.8921 7.20701 11.6677C7.19777 11.4433 7.11327 11.2285 6.96712 11.058C6.82098 10.8874 6.6217 10.7711 6.40136 10.7275C5.9189 10.6323 5.46491 10.427 5.07467 10.1277C4.68444 9.82845 4.36848 9.44321 4.15136 9.00196C4.33209 9.02662 4.51397 9.04194 4.69628 9.04786C4.91286 9.05113 5.12487 8.98543 5.30166 8.86026C5.47844 8.73509 5.61083 8.55694 5.67968 8.35157C5.74566 8.14433 5.74226 7.92123 5.67001 7.7161C5.59775 7.51096 5.46058 7.33499 5.27929 7.21485C4.83944 6.92182 4.47913 6.52427 4.23065 6.0578C3.98216 5.59134 3.85325 5.07052 3.85546 4.54201C3.85546 4.47561 3.85741 4.4092 3.86132 4.34377C6.10258 6.43402 9.00964 7.66621 12.0703 7.82326C12.2248 7.82934 12.3787 7.80024 12.5203 7.73816C12.6619 7.67607 12.7875 7.58262 12.8877 7.46486C12.9869 7.34596 13.0571 7.20566 13.0929 7.05501C13.1286 6.90437 13.1289 6.74748 13.0937 6.5967C13.0365 6.35806 13.0074 6.11357 13.0068 5.86818C13.0077 5.01271 13.3479 4.19254 13.9529 3.58764C14.5578 2.98274 15.3779 2.64251 16.2334 2.64161C16.6735 2.64043 17.1091 2.7305 17.5127 2.90615C17.9163 3.0818 18.279 3.3392 18.5781 3.66212C18.6934 3.7862 18.8386 3.87871 18.9998 3.93085C19.161 3.98299 19.3328 3.99303 19.499 3.96001C19.9098 3.88006 20.3147 3.7724 20.7109 3.63775C20.4406 4.19072 20.0953 4.70369 19.6846 5.16212Z"
        fill={fill || "#232E35"}
      />
    </svg>
  );
};

export default Twitter;
