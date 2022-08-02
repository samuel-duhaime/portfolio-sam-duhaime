import { FontAwesomeIcon as FontAwesomeIconReact } from "@fortawesome/react-fontawesome";
import {
   faMoon,
   faSun,
   faTimes,
   faRobot,
   // faHeart,
   // faArrowAltCircleDown,
   // faFilter,
   // faTh,
   // faList,
   // faStar,
   // faPlus,
   // faMinus,
   // faUserCircle,
   // faUserEdit,
   // faChevronRight,
   // faChevronLeft,
   // faTimesCircle,
   // faCheckCircle,
   // faSearch,
   // faStore,
   // faHome,
   // faPlusCircle,
   // faInfoCircle,
   // faChalkboardTeacher,
   // faThumbsUp,
   // faAngleDown,
   // faEnvelopeOpenText,
   // faPhone,
   // faFileDownload,
   // faUsers,
   // faCopy,
   // faFilePdf,
   // faPrint,
   // faFileInvoiceDollar,
   // faCommentDots,
   // faQuestionCircle,
   // faImage,
   // faDollarSign,
   // faFileUpload,
   // faImages,
   // faTag,
   // faChartLine,
   // faEdit,
   // faPlusSquare,
   // faCrosshairs,
   // faSchool,
   // faUserCog,
   // faUserFriends,
   // faSignInAlt,
   // faUserPlus,
   // faSignOutAlt,
   // faSackDollar,
   // faBars,
} from "@fortawesome/free-solid-svg-icons";
// import {
//    // faFacebook,
//    // faInstagram,
//    // faFacebookMessenger,
//    // faPinterest,
//    // faGoogle,
//    // faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

type FontAwesomeIconProps = {
   icon: string;
   color?: string;
   onMouseEnter?: any;
   onMouseLeave?: any;
   onClick?: any;
};

// TODO: Key bug avec la console dans la page Produit, télécharger
export default function FontAwesomeIcon({ icon, color, onMouseEnter, onMouseLeave, onClick }: FontAwesomeIconProps) {
   return (
      <FontAwesomeIconReact
         color={color}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={onClick}
         icon={
            icon === "faMoon"
               ? faMoon
               : icon === "faSun"
               ? faSun
               : icon === "faTimes"
               ? faTimes
               : icon === "faRobot"
               ? faRobot
               : faMoon
            // icon === "faHeart"
            //    ? faHeart
            //    : icon === "faArrowAltCircleDown"
            //    ? faArrowAltCircleDown
            //    : icon === "faFilter"
            //    ? faFilter
            //    : icon === "faTh"
            //    ? faTh
            //    : icon === "faList"
            //    ? faList
            //    : icon === "faStar"
            //    ? faStar
            //    : icon === "faFacebook"
            //    ? faFacebook
            //    : icon === "faFacebookMessenger"
            //    ? faFacebookMessenger
            //    : icon === "faInstagram"
            //    ? faInstagram
            //    : icon === "faPinterest"
            //    ? faPinterest
            //    : icon === "faPlus"
            //    ? faPlus
            //    : icon === "faMinus"
            //    ? faMinus
            //    : icon === "faUserCircle"
            //    ? faUserCircle
            //    : icon === "faUserEdit"
            //    ? faUserEdit
            //    : icon === "faChevronRight"
            //    ? faChevronRight
            //    : icon === "faChevronLeft"
            //    ? faChevronLeft
            //    : icon === "faTimesCircle"
            //    ? faTimesCircle
            //    : icon === "faCheckCircle"
            //    ? faCheckCircle
            //    : icon === "faSearch"
            //    ? faSearch
            //    : icon === "faStore"
            //    ? faStore
            //    : icon === "faHome"
            //    ? faHome
            //    : icon === "faPlusCircle"
            //    ? faPlusCircle
            //    : icon === "faInfoCircle"
            //    ? faInfoCircle
            //    : icon === "faChalkboardTeacher"
            //    ? faChalkboardTeacher
            //    : icon === "faThumbsUp"
            //    ? faThumbsUp
            //    : icon === "faAngleDown"
            //    ? faAngleDown
            //    : icon === "faGoogle"
            //    ? faGoogle
            //    : icon === "faEnvelopeOpenText"
            //    ? faEnvelopeOpenText
            //    : icon === "faPhone"
            //    ? faPhone
            //    : icon === "faFileDownload"
            //    ? faFileDownload
            //    : icon === "faUsers"
            //    ? faUsers
            //    : icon === "faCopy"
            //    ? faCopy
            //    : icon === "faFilePdf"
            //    ? faFilePdf
            //    : icon === "faPrint"
            //    ? faPrint
            //    : icon === "faFileInvoiceDollar"
            //    ? faFileInvoiceDollar
            //    : icon === "faCommentDots"
            //    ? faCommentDots
            //    : icon === "faQuestionCircle"
            //    ? faQuestionCircle
            //    : icon === "faImage"
            //    ? faImage
            //    : icon === "faDollarSign"
            //    ? faDollarSign
            //    : icon === "faFileUpload"
            //    ? faFileUpload
            //    : icon === "faImages"
            //    ? faImages
            //    : icon === "faTag"
            //    ? faTag
            //    : icon === "faChartLine"
            //    ? faChartLine
            //    : icon === "faEdit"
            //    ? faEdit
            //    : icon === "faPlusSquare"
            //    ? faPlusSquare
            //    : icon === "faCrosshairs"
            //    ? faCrosshairs
            //    : icon === "faSchool"
            //    ? faSchool
            //    : icon === "faUserCog"
            //    ? faUserCog
            //    : icon === "faUserFriends"
            //    ? faUserFriends
            //    : icon === "faSignInAlt"
            //    ? faSignInAlt
            //    : icon === "faUserPlus"
            //    ? faUserPlus
            //    : icon === "faSignOutAlt"
            //    ? faSignOutAlt
            //    : icon === "faLinkedin"
            //    ? faLinkedin
            //    : icon === "faSackDollar"
            //    ? faSackDollar
            //    : icon === "faBars"
            //    ? faBars
         }
      />
   );
}
