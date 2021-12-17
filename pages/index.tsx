import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ThemeDef = {
  menuText:"font-medium hover:bg-gray-100 hover:text-red-900",
  avatarSmall:"inline-block h-32 w-32 rounded-full ring-2 ring-white"
}

function Notification({ imageUrl, imageAlt, title, message }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={imageUrl} alt={imageAlt}/>
      </div>
      <div className={"top-[100px]"}>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{message}</p>
        <div className={"btn-primary"}>
          GOGO
        </div>
        <div className={"btn-danger  text-[22px]" } >
          GOGO
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {

    const url= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEUAugD///8AAAAAuAAAtgAAswAArwAAsgAArQAAqAAArAAAqgAAowAAuwAApQAAnwAAmgAAmwAAkwD6/voAigAAgwAAkADp+ekASQEAcAAATgAAWwAAhwDy/PIAewAAVQD39/cAdAAALQAAFgAAGQHS8tKq56oAQAEAfgAAagCD24Pb9NsAHwEAJgAAYwAAWABBQUFx1HG77LsAEQDL8MsAMwEACQC4ubjW1tZYWFgkwySO4I5EzERgz2A2xTYAJAA0NDQoKSiQkJBo1WiY3ZhKx0o+xj6/678AMgLJzcoAQwGnqKfm5uZoaWjBwsGZmpl823yL34uDzoNBS0R2encHSB8nNi4aHBpeZGAqLSuMk46rs60fHx84RDsNIhWAgoFQXlQuw4ZbAAAZFElEQVR4nM2dCVviyLqAgUpYAgn7LiD7prgjoqKtomNLqz3d9/T0zJzb9///ilshVUnIUqmCRPo7z3nOGYclL1/Vt9bi83ss6XQl3z6+fL++mk2noij64H+n09nV/OiyczqspNNpjx/A59knQzIZ7f4KcgEovlVZ/kkUZ9cDCJqveMfpDWE63z7tDOZTKzQzqU98PHp4aucrnjyLB4SV9vHD0Ux0ZFvlFKfXcNjm3X8ctwnzkG4u+hjg9JQzSDl0+YlcJawcD65n4hpwGqVvOj9yF9JFwtP3x+lGeCrm7LrjnuVxizB/OWWZd46Q4n3bpSdzgzBdOb0XXcRTGMFVJ++GJjcnTA87c9f5loy+2UN7cw+yKWG6/XC1luWkg5wOTjdl3JDw9PLROz6F8f14M8aNCNuDR1eMJ1mmR8dbIswPNvN9DIzXp9sgfPggPEWO1o7n1iRMP808nX4mAeLDmoxrEabb7574B7LMn9YyOesQ5jsfrEBFgDhYJ85Zg/DJ/QCGVh477GpkJqw8bEWBigDxnVmNrITt6w81oWZ5ZHWOjISd6Xb5oIgDtpHKRJg/2t4A1YSbMY1UFsLhFbdtuqUA8ZghraInTB9PfwcNLkW8pHf/1IT5j43SnOSIupZDS5h/3zaTQea0wTgl4XDbTsIsM0q3QUc4nG2bx0LEjnuEp1sL04jCfXWL8Om3G6FIwFcKr+FMCL3EtklsRfzqHN84EqY9DtQAx/OhpfA8xzG1c2T50xHRiTDd8dbIgFBQkKSYFItJUkQIhoMhmZP67aLoiOhE6PEQBcFIplxQpDQq1jOpeCQqBEP0lOKfDnPRgfDJUz6owWjxJoDl5OSktdct1XfiUlQI0TKKf25CeOqxFeWC1VbALK1CMRePhGkhB+sTDj0GBJxUswBcSleGDPI02QxHdP0kwqHn9QpOOrAjDARuDqopCSrS+WNEUgBHIMxfe8wnj9Lenj1ioPm5n5PCvPPvPHtahzD/7n0oA0Kx4j4BMTDu9lNwrDoyzu3TflvC9IPnfD5ZiVKu2B/1+/3RaFTunpntzkm3Ho86D9V725TYlvD4Y4JRwAej0N0vJZ5IZbLFmlGpzUJGEhzVaFufsiMcflQwCuSwDUkoGI5GYslMsTteHaujZDTkhGhnUG0I81dbqdtDXI4PCpFYqthdGbBnmZiTxRFtkn4bwm2WDaFSQ0Ik3qs1dJpsFRMOIxVMraeiNWFnyxkvhAxGYzvlP3QjtZyLkEcquLeMUC0J279BRgi4oBDfKWtR6/jzjhQk//KWU9GKsOK9q6cRyBiNZ0u6yZh1QJxZTUUrwi1URq0fHDJGErqQ4KYnBYme0aoXbkH49MGFNaAk+dBbmFN86C5jmYKmxh5Zi+IDDWH+ntnMAOeFsvbvDYWleCKRSMZjMZjkwxR/9ZMAH42PtOC1GiMiTs3j1ESY7jCOUdm4h4LBkOnZKAElmOSfnZ2VSrVRPZtLxKLB1bwQ8IJUbahegzxQgXmcmgjbbCkTHEZhKZnLZHJJKUwRIhuFj9Z12cVJozCq5mIC/CDdJ8HgNdPFL/kjK5GchrlMbCRMvzM9pGzSe6NSt9E4K416yWiQUY8gmDKGoa1uuZpYTfBBMJr7rIU3UcIPCWZGJRoJ2aq/fFDKFtRH3C/1YgJbi5EL9ccBk9x8hjmTPkoDoYhmbwop0peAdwdCpjHKC8nRigr2ynE2RBCqNs2EMJ9o9JMR/YAIRTQtluMkayO2iYQPTIDhRMn4aF02LYJg7MyKEIYwf8ABoakRajGnzsU6aSqCKxJhhWWMckEzIESMh1kQuXC8ND6RxTxaC5mYpkboNVLqj5GLksZph0A4YHg2EIr1rX77kVP0aECEVmQnm832Rgels/3VHH+/ntTUCLW406D6Ga8qtoRMbUIumlHn4OHFxSH+/zdZtqnIQW8aFoQozH0TmfpBV1+aOimntNQXBKUqVnSf6DIebAkHDIMU8LEy+rrbt+fJ4vntG/rHWtwxHzd8FMx7oSxT/FiqWtPlTIFSTkPkgupX7mdIP+M8b0N4+sjyWMEUGlI/X5W3PyPExg7TMNWTAi4E84mdkY6xm9EhCglsUGtEe9qxJkxfMtkZoYom3jP+gNdbZWgVJR6owozJhYR4ZjS2QgS8tIMSxr1qlLf/kOuhJWGbRYUw3EIj5rv6Abt/o983JQnhpQSXkTQjJWSEejyzRAzFsXUrJQhK1BfBNUK2AimMmNFQWmgfdv5p+Zf/qWawpOJywsAck8O8MFnWEHNqnMaFUyi2adYj9koE13kLwiFbeS0koWBEN+QnikH99z8n+OFaZ7XiTioeZYWECUW8rlYwaglsVwAfqSJjWyAq8cmCsMPyBDLhnonwWXUZehmflXvLFgshDjHNWJjex6rqSB2pdgUEk6hddVIlKfG+YiKszNlGEh9BQdTEiVAeUoWi3GKxNvBA9ohQDDMW5kxZjHhSVaciH80iN1xKErySFp2qhKzNUC46Mloa/+TChhC3WKzUCJP8WCqXS8UlOcPXvQB6+GwDvX1fG6fBOFJic4cQu4GBiZC1dsEJWeWLfmhK3P1uSyi3WKoxi6IuCEaqco5/VjioZ2CCr8+ZglIPz+gajgVhfJpFjngUIzgMsWIgzLPW10AwgX7gv3RK/ERADDRLiaipBMEH69j3NW8+11dyJph51PG/y2J7CpXYxYol2Bo1/saEl8yumZOK6NvvNMSFMhN//Pvp9vDw8NO/Bsb9rLHKAkLJE/0r9orxiNZL44Jx3CTuJjEOF0WxRqBHGqYzAyF7lZuLZJAhuH3V2dPzXy8TbdwuXn9d6PXaLCaF1TpTKGP4FbrZWFh9CaemTM1iBCsxHEdmvCSF7J8PtFcIT9mjq1BsB6eHOiVayPPdhabL8Sgh8CsfkzB2RZu6JgyM06pIx90UnomhCDJyzSRpmL6vELLVn3zLtC5TwuPr1y4R0b84/6I+/0k5sTK2+KgpyxyXUxpiMIFMZ0sNYjgB652YqD1WdIQVppB0CSj1tMjxjQwoM758U5//IKF/LmhN+t1Ws6mfjSe6l/AR7DLUSBR6ffSnMsHp+6bHOkLGtV2AC8d17YSLBQkOyUT1JOPaSi0H/lipbK9X7Ze03Hdc1gUx2NjsqxrjJRS0npFyKHGgI2RJfWVAIV7WSmS3ExKZKrtvP/A7yjF9EQLA1FcQYIa/M9J6aVqxiY/20I/Zx/6Pi/SUv+ylSFmiEn4vCRlXznCCLvCn0+BSXlQVGWs5cpLPw9w3o5W2MloQk0RpbyEVxH/KKfpuVkn1GmUl+JLwmKnbBDNtDfDfF1o+KAv8rmbdqlzFhSLxIrasZ7GwqsSiMmBaOwK2pijXH49IE1G8VAmZGoZcUKfBL9QKXMrkFr2vkY1YlOblJkwdm5wiTuJBONfAQxdPxDjyFwWiR1y2aWTCyhEDIAwWcSwT+Pnm4CZMomYfn3OWhp4LS9h5nCVV0xlDWe9BHE9E/Axdkkf0PZ4iwvacATAUzWIjc/jKCuj3v+IIp2z9bHAKIJxWVTWdEdTcOEsgjXFRFJL/kSMW+DuIkGX5EyeoleefdDZ0VXZfPuGpGLNsIXFSFsdkMcwjZBWeFuYBYVQcbuwQK+yX6SUhS4EGjhh1RSjbFFTlb5RKNKxL8zCIwc5ODdOEFILOYlMTRE2MvTqJEMg1Nx/brkLonLBfPl8P0L+LI7iSdcOaj6B21A12BdDpI49YRT8KCKUUwlaRWGCftpeEbXpfAX/g7oaAEBEb1KplaR7qR3EFJ32s5JCE/GQ/gv+CqjWtIqlH4/M9LQkZ6hd8BPsrp2CbJM+IsGXd6gzhMK2GYxg+gv5Swh6Ej5fRr0ByiD7wkIaEafolXlCFyNAdrmNlVLkLYASrccpLyNnV4iZCzMPH0GsOJCIhDNx8/sqAmpBTZyFLJGOWXeQVWz2r0jwXrSsDpRQPYcKyHWHN2iJjmcqEefoyIh4bgYuNVAi9IrKnnxMWS0cYCYmNLnEoE1JnTtAGIF/onBA6KPFXAE0jC2PDRdh0SHzkY0jYpjY0agno8NkZgiyo/h/oWgRvunmoEtrOwzJxHvrAJSQ8ph+k+GO/bAqoZVJlczsVewLNioQwYU31H2i+NFX/YUN4nfYx1BFDyBn++GdzwgXy+zdZo7lX45Wm6utCOPTW/oKMupM/9M3SvjR1sRt+tTI/fq4Zr60I6sQFasayLodjmv2eOabBY1qNaeoOiwbEii9N3VQDuI7/zQVAvx/VbcY9wzjjY2hIdjE7F8YN9Z2wMS4lJvmyDH0ValMKrbjyPd+dH59CJj8RiCGN4pPKw4/LkppboDUYe1osjrrdjYzDmgHw5KNvWHDYZm/m7lVBPfGAoQ/Io7ZEa0fLD1Fb/zPODwFdfii/suOjdxa8hCpCG7p7LLuo9ra/uvwHlwpr2FVqrZhyzJTjE5dkyG++9FFHpSAUQ4TuAEJjg5TYX9lmAIJLK6Ite+IEvDSpGlHrNDgEINVplp9276N2FiCEfspDtwj9KI26Wc0x+HC8XqtLuD0DQtJIGZL7GbVyg/yWlmDZPvXcR92xAMGkMrsvXCNEShyXV3IMwMk9b7WNqOWkJXUaChnFuDZ7jssEr3zX9ISJE5cJd1FXfN/Qr5YLxOpjQUuKSuFFSa15V7H2HZdfTSEjPeHYZUL/KzI2pDVcWpMio9aIcbGoS165rxBSlzC8IMQ5xg1h5QgfRyWMg7hqXBNIqyPS0i9MyJA7JfbcJlQrxKWU7R4DTHjTw/aIi6LgKrDjvNBTZCAMxc9cJ1QLGnXbLIhDLVSt5BHCe9xbTt5wSUjt8FV/+NNNQpwo/mFd5fcpq0qb46YGyAnI5AXKEQdvyEaoxTSunvL/hpRokSiqiFK2r1vEwUdw44RikC4Z6QlRlrZxhq8X7DFOLLtRssirwqBo/jGJailnxLYMM5+uuvDq/NwMgmO3M/utGoDTLXmD/hG1hvrkCgY7IxdB2dP65W5L+SuAH5hq9TQfQXbmhrjWey1CvO75l7uEuDO8l3XY6IsIcQJgP3PXJYTRoNthmyK4KtVN0CgFG7xW1inqRnz060xAMKdMgNsNehZWgo1NoJSkQMRn2vTJteC1CHGtzW1C/wIVNJojCkQQihT3m41+jLwlWCNkWIbBo7Wrn1xK8jV5QVX+vb5hYZ8lYlBIVXMROkCW3EKe40r85Ea9dFUWeMHUXj/hfAIG4EPwP5Rbj6Y+huXdqrsgr0VcR3DwFmjVKM6jAYB+5f/Ux9DiBgJaf+xCVd8o6hqNgHweDfsODVuZ0ddpdL2nC7dNjV+LT+WF/dl4hP40M4dnntPX2pbGVEnVbl2NTJH8HdDkrJ+LWa/sZya8950yvFxtPm3aP7RGXFkV3q0m3GAEAx/LmWxcpDj2Im5Dcn4bWGWM05zz5UD44GPZ+gvCaL8K44I9Wnn+vrIZuDVKkbbeUwl37EszuHy15bPZUgx7Wbys7CsaF3LOpSYHGfrS1AXTZalGMTU/3U0R9YxvesRAN8m0M9wscv+QfrGJLgl2qf1kIbuLN/0GjTLbznCTTNM+pjOhYIqoVBS/ezMREeTzd3VJeMByyQ21gDkkZHEXIJhRdo7SL+5eU/7BitynKcbYP/AAErK4C3VV+Q8vfP6K4AXTJ0VhAyWCjrxiiCG7AGox1uVajYU8/1f5pgLr9n69iG15XRvL6XN8tK/k+cwrvNnlH4Ww4dTIJslyXVua5TwT6PMVU/PFe8KFUoTbq1LmulaPO5cJmQ7dAcFUQ/H5XpsaaFLv0ERc3yWCQWW5Rphh05Pa6m5+AKHSemtuQCgfHyGv82aIarRFdN6bmoliatY+ZsOn7OiW1+pfMryHi6Jtu95FNVhQ/HZG2u1LFjBX1ur7WU5o48I7Sll4k4XeNLL7z/8q0XeZqhJuTSgfTCsTnjKlF2hX6zdPCXdf71BM0yLvGSGKumeGZSJqR1d5SDh5+a5G3zXiaUJkmT4hQj/LRFT3PniUIsJU/8uhFnjfUPUyrGW5ZUYhZLnCQj2XxvWy8FIWbzo86Awzdn1TGlne0rIkHDJsXuOiaIeq2x2oJd5qpSbQ2Ahw2lEJ/QwbENXzMNxb3raU3cXrl1W8QKvkdHQwWeZDjZAhC+bCOfcJId6b4eSXcaNUjQubAPqO/Bohw0FtIIyWRrlHuHi9Mx77svd5tBMXNquXorM/0JkK9Ju5YRLsLuHk5ctPg/q65WpKEtY4DXVF0DmfiJBld1fcRUKId2g4MPHmoJpzozcD7v16wjT90qggOm7FBcLnL7c/VvHQ1SRutGXA8Qoh/THzQEi5Y2kWfxuP6xk3RizXyziI6F8lHNJ+Kif0NifcnRhNZ6C5f7ATjxhOEN5A1IOi1HOiaDeW8BG0YX7t7gx0Dd8Nc6/ZKNVTkpuNUXlfnoGQ0tbAyBst2FmzsD95vfu2ihdolPqZeNSt0Yme8xp/oUqYp3OJnIB36KxTxoBJ0YVRfZ9H2UQk7Kb6lqIeuqcSUpbc1EH6X/bsafL2xRB3BvYPqqmYsMbxkQ4CrtSDE7VTBakKUtBXoK0BrDn+4u0vk2sI7MPZ54prMElHXQSrEVLteObxDlbG9HDy3US3nIF0i/XY5VE7wFR3fumpsxLhLEQqZOgC707u/mMgu71QArVN6mhEedDWMesIK44X4oJQDG3Qobaku5MXo+e7vbhboC2kXhE+6k4t158j7HgeFifgo2HpVLg7ef1liKp/XNzJZ754Syhe6pai6wkdT+LB+4vpzk5anJuSosO7c2X+Li68JNSrcPW0awclcuFMA6nQ2ZA+/31hMC6H388n+H1oHZvjFtC1RFy5EHH1THZymsjjfY2Oa6Im0DUY1Pf9eaH7WdDhH93169kEma3c2b1K2CYT4h1IDhuBXy6MZ14a2427d8qfS3TrfBll9U5Lw90IpCRK7az9S1Dh7uSXke7TF5PhXSg/wWYdbDuZrn6XgZC07xmE0Up221XQi4mxHBgIXLxYmF2kwv1N2ru2j2m4h8V4gwfhzCh1P751pRR6vr+MeNA7WC3ye0X/suDBIAVzw5cZCQlnuaj7LSwW0O5Ozn9ZHwR9a44NJniaZj0YpKYr9Ex3Bdn3vIFgV+1enP8yer5WF5/+f2jspaonRhecd4AyC7g07jszEVZsb/GA83BsNQ8ndybbeTbK7tQb2NLc6V+/q0VxmY2X5Zmf8WroN4j5zq72o80Pq95c9EM38BZvh8aCUusgm4pFdIc8Bm61EOhcG8uUW0KYxOLeXIt712xbwqo//D9kHnfPTXPvpFBNLAsu8sZIXTp/8XZ+fv6iH8sHFBtAmcXiNlILQtscQ92NEPj2ulgsXo3lwPFet5+TcMGFC8fLFnc5YaklPDAzVpfmWt0OaHfRBTrPQRFTRnvTLa+usZdPqrVDHNc2X/5rlqnVFY+Wd1jaHRXJS3Wri8LlwXl2oLQa9BUJToj1byxf3hqlnO+/ZZd3q/271veQDmxuMdAfzqqTRq2eiRvvvPMtNyn3Chavd2WNuvnpTFeuEQgr1peTAU5ImS5DHxeKmURk9VoDDTGSKnYNb2gsb0lwm8/2ulyb23JtTq2Rrw4prpyD3xhlEoRGGOCDUqJX0t7SLFRTsU37ZpbCWdxfSSC0m4ryzaCpGj7gs1XLJiXBUnt6xqiU3KkfFAqfS/WdxOoFD+4JOLLZRG9HaLsUDKoxkuiNSqVCP5uMRCk6KfLlvuFoNBqB/w17Ux31GW6xoiH0522LNpx8i5j8vPSPiy/f5jzCM5Rm6AgJS1CWt2cvH9er52WWmTlacyZkWu62ZQEP9idZEAiZzojergwIR3WQCP0dD7yWB8Jdk84iIRL6v/42E40g6o0y6xD6v2778SnkypwxMRCmWe7t3I7YOkI6QkJR4zeRualswUjoz//eiFY5LyPh761FRw3SEMK5+Ls6Dd16hI0IbRPibQs3I1tRBkK2a1o+TK6dH5yakPGunQ8RQArV2An9TwyL3T9EpoRgey1Cf/t+20wr8nhMey4eNeFv5RiBsxtcg9Bf6Yi/SSDOHVF4iTUI5VVTvwMiEGmnIDuhP3//G7iNmXVd1B1Cf7qzbbcxfWcYoWsQwpG6XTXOO6xnizIT+vMPW5uNQBzQ29D1CaEaj7ZjVMHVMU0g6gKhP9+x7tx4yyd+dU6V3CL0+4fvH61GMD9d73TfNQnlKwU/FNGyvestod/f+bBgXJxR5hEuE/orD2w3tK7L9zhYawK6QAinY+fa8/n4eMnuIdwjhIzHXjIC3+NDe8PjwzclhK7j6d4jRuC76gw3Ph59c0I4H9sD0f1WIhCvn/IuHP/uBqFfzh1n7jLCAG0T86ITlwihtN8fpy4F5WB2b9/TZRX3CKEijwfXsw3nJPBN50cdl9S3FDcJoeSPH44eRd96lACI0+uvruL5XSeEkj/tXF5PWU0PfLk4H3SeXMbze0EIJT1sHz8sKWkwgaw7SNcerpEbOYsnhLKk8/nh8SWclzKBJan8Z86H4PKe0MniGaEi6XRl+NS5PJpfTadTUVxeiQL/R4T/NJvfDx6Oh5V02tU7T0zy/3cfh6B3SyacAAAAAElFTkSuQmCC";
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"bg-omlet desktop:text-[40px] desktop:text-center tablet:text-[20px] tablet:text-left"}>
        Desktop
      </div>
      <main className={styles.main}>
        <div className={"flex justify-center space-x-4"}>
          <div className={ThemeDef.menuText}>gogogogo</div>
          <div className={ThemeDef.menuText}>gogogogo</div>
          <div className={ThemeDef.menuText}>gogogogo</div>
          <div className={ThemeDef.menuText}>gogogogo</div>
        </div>
        <div className={"text-[32px] text-[#ff0055] before:content-['hello\_world']"}>
          test
        </div>

        <img className={ThemeDef.avatarSmall} src="https://upload.wikimedia.org/wikipedia/zh/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" />
        <a href="url" className="hover:underline">Title</a>
        <Notification imageUrl={url} title={"GOGO"} message={"GOGOGO----"} imageAlt={"alt"} />
      </main>



    </div>
  )
}

export default Home;
