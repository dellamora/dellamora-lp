/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../../application/domain/components";
/* import { Container } from "./styles"; */
const GitHub: Icon = ({ fill }): JSX.Element => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.07032 20.5029C9.0703 20.3563 9.03802 20.2114 8.97578 20.0786C8.91353 19.9458 8.82284 19.8283 8.71014 19.7345C8.59743 19.6407 8.46546 19.5728 8.32359 19.5356C8.18171 19.4984 8.03341 19.493 7.88917 19.5195C6.58009 19.7597 4.92726 19.7959 4.4878 18.5615C4.10461 17.6055 3.46987 16.771 2.65089 16.1465C2.59246 16.1147 2.53677 16.0781 2.48439 16.0371C2.41272 15.8481 2.2854 15.6852 2.11925 15.5699C1.95311 15.4547 1.75592 15.3925 1.55372 15.3916H1.54884C1.28444 15.3915 1.03077 15.4962 0.843354 15.6827C0.655937 15.8692 0.55004 16.1223 0.548842 16.3867C0.544932 17.2022 1.35984 17.7246 1.69044 17.9014C2.08029 18.2931 2.39359 18.7541 2.61427 19.2608C2.97853 20.2842 4.03712 21.8369 7.08009 21.6368C7.08109 21.6719 7.08204 21.7051 7.08253 21.7354L7.08692 22.003C7.08692 22.2682 7.19228 22.5225 7.37982 22.7101C7.56735 22.8976 7.82171 23.003 8.08692 23.003C8.35214 23.003 8.60649 22.8976 8.79403 22.7101C8.98157 22.5225 9.08692 22.2682 9.08692 22.003L9.08204 21.6846C9.07716 21.4951 9.07032 21.2207 9.07032 20.5029ZM19.7373 5.37691C19.7691 5.25191 19.8003 5.11324 19.8277 4.95699C19.9894 3.84258 19.8484 2.70518 19.4195 1.66399C19.3653 1.52825 19.2822 1.40599 19.1758 1.30579C19.0694 1.20559 18.9425 1.12986 18.8037 1.08392C18.4477 0.963798 17.1333 0.727468 14.6197 2.33392C12.5302 1.84221 10.3551 1.84221 8.26565 2.33392C5.76222 0.750998 4.4546 0.965798 4.10206 1.07908C3.95993 1.12316 3.82946 1.19848 3.72021 1.29954C3.61097 1.40059 3.52572 1.5248 3.47071 1.66308C3.03301 2.72426 2.89355 3.88485 3.06739 5.01952C3.09181 5.14745 3.11817 5.26562 3.14552 5.37401C2.31709 6.47745 1.87583 7.82337 1.89015 9.20311C1.88745 9.51094 1.90163 9.8187 1.93263 10.125C2.26663 14.7275 5.26663 16.1094 7.35694 16.584C7.31349 16.709 7.27394 16.8428 7.23878 16.9844C7.17612 17.2417 7.21805 17.5133 7.35538 17.7397C7.49271 17.9662 7.71422 18.1289 7.97135 18.1922C8.22848 18.2556 8.50024 18.2144 8.72703 18.0776C8.95382 17.9409 9.11714 17.7198 9.18116 17.4629C9.24479 17.1297 9.40788 16.8236 9.64894 16.5849C9.7947 16.4573 9.90023 16.2901 9.9527 16.1036C10.0052 15.9172 10.0023 15.7194 9.94447 15.5346C9.88663 15.3497 9.77631 15.1856 9.62693 15.0622C9.47754 14.9389 9.29554 14.8616 9.10304 14.8398C5.64894 14.4453 4.14942 13.0381 3.92384 9.9414C3.89885 9.69613 3.88761 9.44965 3.89015 9.20312C3.87411 8.21977 4.19898 7.2612 4.80958 6.49023C4.87093 6.40985 4.93628 6.3326 5.00538 6.25878C5.12781 6.12178 5.21013 5.9537 5.2433 5.77298C5.27646 5.59227 5.25919 5.40591 5.19338 5.23437C5.12592 5.0539 5.07397 4.868 5.03811 4.6787C4.95664 4.14041 4.98337 3.59129 5.11671 3.06346C5.98585 3.30893 6.80383 3.7085 7.53171 4.24314C7.65208 4.32331 7.78828 4.37667 7.93108 4.39958C8.07388 4.4225 8.21994 4.41444 8.35935 4.37596C10.3805 3.82746 12.5113 3.8278 14.5322 4.37696C14.6724 4.4154 14.8192 4.423 14.9626 4.39923C15.106 4.37545 15.2425 4.32088 15.3628 4.23927C16.0872 3.70241 16.9018 3.29926 17.768 3.04884C17.9008 3.56399 17.9305 4.10029 17.8554 4.62696C17.8192 4.83449 17.7626 5.03796 17.6865 5.23439C17.6207 5.40593 17.6034 5.59229 17.6366 5.773C17.6697 5.95372 17.7521 6.1218 17.8745 6.2588C17.9516 6.34571 18.0288 6.43946 18.0981 6.52735C18.7044 7.28527 19.0238 8.23282 19 9.20311C19.0018 9.46272 18.9893 9.72223 18.9624 9.98045C18.7422 13.0361 17.2368 14.4443 13.7666 14.8398C13.5741 14.8617 13.392 14.9391 13.2427 15.0626C13.0933 15.1861 12.983 15.3503 12.9253 15.5352C12.8675 15.7202 12.8647 15.918 12.9172 16.1045C12.9698 16.2911 13.0754 16.4583 13.2212 16.5859C13.4698 16.8309 13.6333 17.1493 13.6875 17.4941C13.7551 17.7618 13.7861 18.0374 13.7798 18.3135V20.6475C13.77 21.2949 13.77 21.7802 13.77 22.0029C13.77 22.2681 13.8754 22.5225 14.0629 22.71C14.2504 22.8976 14.5048 23.0029 14.77 23.0029C15.0352 23.0029 15.2896 22.8976 15.4771 22.71C15.6647 22.5225 15.77 22.2681 15.77 22.0029C15.77 21.7861 15.77 21.3105 15.7798 20.6631V18.3135C15.7878 17.8713 15.7358 17.4301 15.625 17.0019C15.5933 16.8614 15.5545 16.7225 15.5088 16.5859C17.03 16.3332 18.4123 15.5489 19.4094 14.3725C20.4065 13.1962 20.9539 11.7042 20.9541 10.1621C20.987 9.84352 21.0024 9.52337 21 9.20311C21.0222 7.82188 20.5773 6.47363 19.7373 5.37693L19.7373 5.37691Z"
        fill={fill || "#232E35"}
      />
    </svg>
  );
};

export default GitHub;
