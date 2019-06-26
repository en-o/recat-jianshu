// 全局样式 injectGlobal 废弃了  换成了  createGlobalStyle
import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`

  @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1561360901616'); /* IE9 */
      src: url('./iconfont.eot?t=1561360901616#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS4AAsAAAAACRgAAARrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqFDIRHATYCJAMYCw4ABCAFhG0HVRv6BxFVnInJvsC2YU+Lxn2YLxgUlFprsSPYZmfgNzCBAgAAAACC+FzD35fk0jR3JUAHRKpC1RK5TlUr0YIx/UBGfM2gcHIu8wN2hBkipF3Sz1N6aQYAEsgIQmFJgdoUqd2EHNHJ7kdQI7U73i5/bl8goAO0F9NFk5qf0IwD1vc05CiSncf7n2PGK4v2/L5wyQ7aG43HAxpgXlQBnR3fgRwfiJ5GeH6u2lxBl0MATz7Egq6/3MYFBoO8TQBZpeGBMAEzJoMkOJ1NONRYOQVbnDrGCoAT6+flAyQTHCgCjbzrNDENgf2Gn3KU9R/oNayw1ZwTEI8CDdQCwIDsJrrXQTnpWrDGf/5CMwoQ4VCY1/Dt8V333f4z+P8/CMhlvxApaQgwzf3jKRALqSNgxjMBvAaa2NN4wIiBJg5GNDTpcCJspgR9KABsg2tC4BkAkoOMrQW3QS3+K4tzaWF2dhQl5Ocm+EUXF6doZ8/uOj5/xbEcuEwtAF78Qyr8TJft7p5t7a6zMDMAc4PU2tYRdubd7u7UBN5641ATLiCyP7jffJE5wWmhI+DkBn9tJFAvtlJnud7eUjOx4965PnsIDy7svL935xw3N36kdLGF/le6u0vG2Rbrsof7WRdqGxtqWBba3uXaDpk7B4eaWffam9aaBtXbW0NAX+nmgWP7YJIGO1vB17h0dLOWvS4epy/XiaucKu56NWtlg5hfSpRehtL9l0ruovQaXDEjKVLvzfzW0+J2NRIk6Ilnku2RtL7O1oVanyvuccec7r99wr6FBZBDOPQQbBCoS0iwFWgQPFEF5qnuXyMeyn//jyevJSkN+CuNmThkDikpxk8JSUkRqp/S+ESHUrvcvYU/VIDniVqUXVRLAkOg6+0V1kynYN3dGBQpnBBmqy5OQJ+O7YWnPfq1A47iw6Lfa1dEP0BZbW7e2sclhj4dDll0GYtRzBwvJ/IUmky7bhXRH3LhncAhxC/l+0WjyNnsGE+hdslspU4Zn3DRbJ340lwz25bCA8D/f7SBLMYzCehGxh96QjoMYb2MyM6ht868e36HtQWoGqDX+eVAbQB4nn5EitB/YQPFxbeAho/kXvHYCHNYZV+ZbLHmLdHGSrwOBLC0CkUowCtTcIf4k+GjKW1a4WoQHGkeKGLIA42jFGEwtRAQ0goWR9EFXo2Ko0MpOGvSsUC1ZQYi0TEo8R6AlugRYTDvEEj3C1ZirMFbjOspQ+WhTiUcI4GHoDQOqcwsRLUJJ7u2GSvDJsT9MovejrlGYzApPjGcq8AWzJvYQxtRkoUgkHBmhuXsathkYlDlzIBlEa8XQs1OSCBJHxQvMzNw0ofDEAEbAknGQZSMsSDGbMEp8v3NMMUwE4RnjPzwt8M4DV0cShIvsQCiQm0pNHIoT9GMUCQTBAIiOMYMKmdOzKSkGUhNXmWAyYR4+gpJVbYEmkSKquO715r38hzgyWe0UaLFSCBWYlCH7DWVWmb+Po51SLFQQjG3Hx82IyZROwNFesQAAAA=') format('woff2'),
      url('./iconfont.woff?t=1561360901616') format('woff'),
      url('./iconfont.ttf?t=1561360901616') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1561360901616#iconfont') format('svg'); /* iOS 4.1- */
  }
    
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
