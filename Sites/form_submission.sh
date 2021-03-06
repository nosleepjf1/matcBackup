<!DOCTYPE html>
<!--[if gte IE 9 ]><html class="ie ie9 scripts-not-loaded" lang="en"> <![endif]-->
<!--[if !(IE)]><!--> <html class="not-ie scripts-not-loaded" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <title>  form_submission.sh: Web Programming and Development
</title>
  <!--[if lte IE 8]> <meta http-equiv=refresh content="0; URL=/ie-8-is-not-supported.html" /> <![endif]-->

  <link href="https://du11hjcvx0uqb.cloudfront.net/favicon.ico?1440100112" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <link href="https://du11hjcvx0uqb.cloudfront.net/dist/images/apple-touch-icon-585e5d997d.png" rel="apple-touch-icon" />

  
  <link href="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_normal_contrast/bundles/common-832d96d710.css" media="all" rel="stylesheet" type="text/css" />
  
  <meta content="app-id=480883488" name="apple-itunes-app" />
<meta content="app-id=com.instructure.candroid" name="google-play-app" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
  
  <script>
    // listen for any clicks on links that have href="#" and queue them to be fired on dom ready.
      function _earlyClick(e){
        var cur = e.target || e.srcElement;
        while ( cur && cur.ownerDocument ) {
          if ( cur.getAttribute('href') == '#' ) {
            e.preventDefault();
            _earlyClick.clicks = _earlyClick.clicks || [];
            _earlyClick.clicks.push(cur);
            break;
          }
          cur = cur.parentNode;
        }
      }
      document.addEventListener('click', _earlyClick);
  </script>
</head>

<body class="with-left-side files context-course_341215">
<noscript>
  <div role="alert" class="ic-flash-static ic-flash-error">
    <h1>You need to have JavaScript enabled in order to access this site.</h1>
  </div>
</noscript>




<ul role="alert" aria-live="assertive" id="flash_message_holder"></ul>
<div role="alert" aria-live="assertive" id="flash_screenreader_holder" class="screenreader-only"></div>

<div id="application" class="ic-app">

      <header id="header" class="ic-app-header no-print ">
    <div class="ic-app-header__layout">
      <div class="ic-app-header__primary">
      <a href="#content" id="skip_navigation_link">Skip To Content</a>
        <div role="navigation" class="ic-app-header__main-navigation">
          <div class="ic-app-header__logomark-container">
            <a href="https://matc.instructure.com/" class="ic-app-header__logomark">
              <span class="screenreader-only">Dashboard</span>
            </a>
          </div>
          <ul role="menu" id="menu"
            class="ic-app-header__menu-list"
            aria-label="Main Navigation"
          >
            <li class="ic-app-header__menu-list-item ">
              <a id="global_nav_dashboard_link" href="https://matc.instructure.com/" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--dashboard" version="1.1" x="0" y="0" viewBox="0 0 280 200" enable-background="new 0 0 280 200" xml:space="preserve"><path d="M231.6 94.2c-2.5-4.9-8.5-6.9-13.4-4.5l-57.3 28.6c-5.4-5.2-12.7-8.4-20.8-8.4 -16.6 0-30 13.5-30 30 0 16.6 13.5 30 30 30 16.6 0 30-13.5 30-30 0-1.3-0.1-2.5-0.2-3.8l57.3-28.6C232 105.2 234 99.2 231.6 94.2zM140 150c-5.5 0-10-4.5-10-10s4.5-10 10-10c5.5 0 10 4.5 10 10S145.6 150 140 150zM70 150H50c-5.5 0-10-4.5-10-10s4.5-10 10-10h20c5.5 0 10 4.5 10 10S75.5 150 70 150zM140 80c-5.5 0-10-4.5-10-10V50c0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10v20C150 75.5 145.5 80 140 80zM105 89.6c-3.5 0-6.8-1.8-8.7-5l-10-17.3c-2.8-4.8-1.1-10.9 3.7-13.7 4.8-2.8 10.9-1.1 13.7 3.7l10 17.3c2.8 4.8 1.1 10.9-3.7 13.7C108.4 89.1 106.7 89.6 105 89.6zM79.4 115.4c-1.7 0-3.4-0.4-5-1.3l-17.3-10c-4.8-2.8-6.4-8.9-3.7-13.7 2.8-4.8 8.9-6.4 13.7-3.7l17.3 10c4.8 2.8 6.4 8.9 3.7 13.7C86.2 113.6 82.8 115.4 79.4 115.4zM173.6 89.6c-1.7 0-3.4-0.4-5-1.3 -4.8-2.8-6.4-8.9-3.7-13.7l10-17.3c2.8-4.8 8.9-6.4 13.7-3.7 4.8 2.8 6.4 8.9 3.7 13.7l-10 17.3C180.4 87.8 177.1 89.6 173.6 89.6zM140 0C62.8 0 0 63 0 140.5V190c0 5.5 4.5 10 10 10h260c5.5 0 10-4.5 10-10v-49.5C280 63 217.2 0 140 0zM260 180H20v-39.5C20 74.1 73.8 20 140 20c66.2 0 120 54.1 120 120.5V180zM230 150h-20c-5.5 0-10-4.5-10-10s4.5-10 10-10h20c5.5 0 10 4.5 10 10S235.5 150 230 150z"/></svg>
                </div>
                <div class="menu-item__text">Dashboard</div>
              </a>
            </li>
              <li class="menu-item ic-app-header__menu-list-item ic-app-header__menu-list-item--active">
                <a id="global_nav_courses_link" href="/courses" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 280 259" enable-background="new 0 0 280 259" xml:space="preserve"><path d="M226.2 259H32.3c-5.9 0-10.8-4.8-10.8-10.8v-43.5H10.8C4.8 204.8 0 199.9 0 194c0-6 4.8-10.8 10.8-10.8h10.8v-21.6H10.8c-5.9 0-10.8-4.8-10.8-10.8s4.8-10.8 10.8-10.8h10.8v-21.6H10.8c-5.9 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8h10.8V75.4H10.8C4.8 75.4 0 70.6 0 64.7s4.8-10.8 10.8-10.8h10.8V10.8c0-6 4.8-10.8 10.8-10.8h193.9c5.9 0 10.8 4.8 10.8 10.8v21.6h32.3c5.9 0 10.8 4.8 10.8 10.8v172.4c0 6-4.8 10.8-10.8 10.8H237v21.9C237 254.2 232.2 259 226.2 259zM43.1 237.4h172.4V21.6H43.1v32.3h10.7c5.9 0 10.8 4.8 10.8 10.8s-4.8 10.8-10.8 10.8H43.1V97h10.7c5.9 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8H43.1v21.6h10.7c5.9 0 10.8 4.8 10.8 10.8s-4.8 10.8-10.8 10.8H43.1v21.6h10.7c5.9 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8H43.1V237.4zM237 204.8h21.5v-21.6H237V204.8zM237 161.7h21.5v-21.6H237V161.7zM237 118.5h21.5V97H237V118.5zM237 75.4h21.5V53.9H237V75.4zM172.2 129.3H96.9c-5.9 0-10.8-4.8-10.8-10.8V64.7c0-6 4.8-10.8 10.8-10.8h75.3c5.9 0 10.8 4.8 10.8 10.8v53.9C183 124.5 178.2 129.3 172.2 129.3zM107.7 107.8h53.8V75.4h-53.8V107.8z"/></svg>
                  </div>
                  <div class="menu-item__text">
                    Courses
                  </div>
                </a>
              </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_calendar_link" href="/calendar" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--calendar" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M268.3 280H11.7C5.2 280 0 274.8 0 268.3V35c0-6.4 5.2-11.7 11.7-11.7h35V11.7C46.7 5.2 51.9 0 58.3 0h35C99.8 0 105 5.2 105 11.7v11.7h70V11.7C175 5.2 180.2 0 186.7 0h35c6.4 0 11.7 5.2 11.7 11.7v11.7h35c6.4 0 11.7 5.2 11.7 11.7v233.3C280 274.8 274.8 280 268.3 280zM23.3 256.7h233.3v-210h-23.3v11.7c0 6.4-5.2 11.7-11.7 11.7h-35c-6.4 0-11.7-5.2-11.7-11.7V46.7h-70v11.7c0 6.4-5.2 11.7-11.7 11.7h-35c-6.4 0-11.7-5.2-11.7-11.7V46.7H23.3V256.7zM198.3 46.7H210V23.3h-11.7V46.7zM70 46.7h11.7V23.3H70V46.7zM198.3 245c-6.4 0-11.7-5.2-11.7-11.7v-11.7h-35v11.7c0 6.4-5.2 11.7-11.7 11.7 -6.4 0-11.7-5.2-11.7-11.7v-11.7h-35v11.7c0 6.4-5.2 11.7-11.7 11.7S70 239.8 70 233.3v-11.7H46.7c-6.4 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7H70V175H46.7c-6.4 0-11.7-5.2-11.7-11.7 0-6.4 5.2-11.7 11.7-11.7H70v-23.3H46.7c-6.4 0-11.7-5.2-11.7-11.7S40.2 105 46.7 105H70V93.3c0-6.4 5.2-11.7 11.7-11.7s11.7 5.2 11.7 11.7V105h35V93.3c0-6.4 5.2-11.7 11.7-11.7 6.4 0 11.7 5.2 11.7 11.7V105h35V93.3c0-6.4 5.2-11.7 11.7-11.7 6.4 0 11.7 5.2 11.7 11.7V105h23.3c6.4 0 11.7 5.2 11.7 11.7s-5.2 11.7-11.7 11.7H210v23.3h23.3c6.4 0 11.7 5.2 11.7 11.7 0 6.4-5.2 11.7-11.7 11.7H210v23.3h23.3c6.4 0 11.7 5.2 11.7 11.7s-5.2 11.7-11.7 11.7H210v11.7C210 239.8 204.8 245 198.3 245zM151.7 198.3h35V175h-35V198.3zM93.3 198.3h35V175h-35V198.3zM151.7 151.7h35v-23.3h-35V151.7zM93.3 151.7h35v-23.3h-35V151.7z"/></svg>
                </div>
                <div class="menu-item__text">
                  Calendar
                </div>
              </a>
            </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_conversations_link" href="/conversations" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--inbox" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M93.3 105c0-6.4 5.2-11.7 11.7-11.7h70c6.4 0 11.7 5.2 11.7 11.7s-5.2 11.7-11.7 11.7h-70C98.6 116.7 93.3 111.4 93.3 105zM105 70h23.3c6.4 0 11.7-5.2 11.7-11.7s-5.2-11.7-11.7-11.7H105c-6.4 0-11.7 5.2-11.7 11.7S98.6 70 105 70zM280 198.3v70c0 6.4-5.2 11.7-11.7 11.7H11.7C5.2 280 0 274.8 0 268.3v-69.8c0-1.1 0.1-2.2 0.4-3.3 0.3-1.1 0.8-2.1 1.3-3L36.7 134c2.1-3.5 5.9-5.7 10-5.7h11.7V11.7C58.3 5.2 63.6 0 70 0h140c6.4 0 11.7 5.2 11.7 11.7v116.7h11.7c4.1 0 7.9 2.1 10 5.7l35 58.3c0.1 0.2 0.1 0.5 0.3 0.7 0.4 0.7 0.6 1.4 0.8 2.2 0.2 0.8 0.4 1.5 0.5 2.3C279.9 197.8 280 198.1 280 198.3zM32.3 186.7h67.9c6.4 0 11.7 5.2 11.7 11.7V210c0 7.8 3.5 7.8 6 7.8h48.7c5.7 0 10.5-3.6 10.5-7.8v-11.7c0-6.4 5.2-11.7 11.7-11.7h59l-21-35h-5.1v11.7c0 6.4-5.2 11.7-11.7 11.7s-11.7-5.2-11.7-11.7v-140H81.7v140c0 6.4-5.2 11.7-11.7 11.7s-11.7-5.2-11.7-11.7v-11.7h-5.1L32.3 186.7zM256.7 210h-56.3c0 17.2-15.2 31.1-33.8 31.1h-48.7c-17.6 0-29.4-12.5-29.4-31.1H23.3v46.7h233.3V210zM175 163.3c6.4 0 11.7-5.2 11.7-11.7 0-6.4-5.2-11.7-11.7-11.7h-70c-6.4 0-11.7 5.2-11.7 11.7 0 6.4 5.2 11.7 11.7 11.7H175z"/></svg>
                  <span class="menu-item__badge" style="display: none">0</span>
                </div>
                <div class="menu-item__text">
                  Inbox
                </div>
              </a>
            </li>
              
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_profile_link" href="/profile" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <div class="ic-avatar ">
                    <img src="https://secure.gravatar.com/avatar/0dce8d215b271c2d43d31756cfe2b18b?s=50&amp;d=https%3A%2F%2Fcanvas.instructure.com%2Fimages%2Fmessages%2Favatar-50.png" alt="Jonny Fewkes" />
                  </div>
                </div>
                <div class="menu-item__text">
                  Account
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div role="navigation" class="ic-app-header__secondary-navigation">
          <ul role="menu" class="ic-app-header__menu-list">
            <li class="ic-app-header__menu-list-item">
              <a href="http://help.instructure.com/" class="support_url help_dialog_trigger ic-app-header__menu-list-link" data-track-category="help system" data-track-label="help button"><div class="menu-item-icon-container" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--help" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><defs><path d="M-557-42h-3v-3h3V-42zM-572-57h27v27h-27V-57z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-560" y="-45" clip-path="url(#SVGID_4_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_6_)"><defs><path d="M-557-24h-3v-3h3V-24zM-572-39h27v27h-27V-39z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-560" y="-27" clip-path="url(#SVGID_8_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_10_)"><defs><path d="M-539-33h-3v-3h3V-33zM-554-48h27v27h-27V-48z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-542" y="-36" clip-path="url(#SVGID_12_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_14_)"><defs><path d="M-539-42h-3v-3h3V-42zM-554-57h27v27h-27V-57z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-542" y="-45" clip-path="url(#SVGID_16_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_18_)"><defs><path d="M-539-24h-3v-3h3V-24zM-554-39h27v27h-27V-39z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-542" y="-27" clip-path="url(#SVGID_20_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_22_)"><defs><path d="M-557-33h-3v-3h3V-33zM-572-48h27v27h-27V-48z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-560" y="-36" clip-path="url(#SVGID_24_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_26_)"><defs><path d="M-548-42h-3v-3h3V-42zM-563-57h27v27h-27V-57z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-551" y="-45" clip-path="url(#SVGID_28_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_30_)"><defs><path d="M-548-24h-3v-3h3V-24zM-563-39h27v27h-27V-39z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-551" y="-27" clip-path="url(#SVGID_32_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><defs><rect x="-580" y="-372" width="1440" height="1024"/></defs><clipPath><use overflow="visible"/></clipPath><g clip-path="url(#SVGID_34_)"><defs><path d="M-548-33h-3v-3h3V-33zM-563-48h27v27h-27V-48z"/></defs><clipPath><use overflow="visible"/></clipPath><rect x="-551" y="-36" clip-path="url(#SVGID_36_)" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" height="3"/></g><path d="M140 20c32.1 0 62.2 12.5 84.9 35.1C247.5 77.8 260 107.9 260 140s-12.5 62.2-35.1 84.9C202.2 247.5 172.1 260 140 260s-62.2-12.5-84.9-35.1C32.5 202.2 20 172.1 20 140s12.5-62.2 35.1-84.9C77.8 32.5 107.9 20 140 20M140 0C62.7 0 0 62.7 0 140s62.7 140 140 140 140-62.7 140-140S217.3 0 140 0L140 0z"/><path d="M94.7 109.3c0-5.7 1.8-11.5 5.5-17.4 3.7-5.9 9.1-10.8 16.1-14.6 7.1-3.9 15.3-5.8 24.7-5.8 8.7 0 16.5 1.6 23.2 4.8 6.7 3.2 11.9 7.6 15.5 13.2 3.7 5.6 5.5 11.6 5.5 18.1 0 5.1-1 9.6-3.1 13.5 -2.1 3.9-4.6 7.2-7.4 10 -2.9 2.8-8 7.5-15.4 14.2 -2.1 1.9-3.7 3.5-4.9 4.9 -1.2 1.4-2.2 2.7-2.8 3.9 -0.6 1.2-1.1 2.4-1.4 3.5 -0.3 1.2-0.8 3.2-1.5 6.2 -1.1 6.3-4.7 9.4-10.8 9.4 -3.1 0-5.8-1-7.9-3.1 -2.1-2.1-3.2-5.1-3.2-9.1 0-5.1 0.8-9.5 2.4-13.2 1.6-3.7 3.7-7 6.2-9.8 2.6-2.8 6.1-6.1 10.5-10 3.9-3.4 6.7-5.9 8.4-7.6 1.7-1.7 3.2-3.6 4.3-5.7 1.2-2.1 1.8-4.4 1.8-6.9 0-4.8-1.8-8.9-5.4-12.2 -3.6-3.3-8.2-5-13.9-5 -6.6 0-11.5 1.7-14.7 5 -3.1 3.3-5.8 8.3-8 14.8 -2.1 6.8-5.9 10.2-11.7 10.2 -3.4 0-6.2-1.2-8.6-3.6C95.9 114.7 94.7 112.1 94.7 109.3zM138.9 208.5c-3.7 0-6.9-1.2-9.6-3.6 -2.7-2.4-4.1-5.7-4.1-10 0-3.8 1.3-7 4-9.6 2.7-2.6 5.9-3.9 9.8-3.9 3.8 0 7 1.3 9.6 3.9 2.6 2.6 3.9 5.8 3.9 9.6 0 4.2-1.4 7.5-4.1 10C145.6 207.3 142.5 208.5 138.9 208.5z"/></svg></div><div class="menu-item__text">Help</div></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="global_nav_tray_container"></div>
  </header>



  <div id="instructure_ajax_error_box">
    <div style="text-align: right; background-color: #fff;"><a href="#" class="close_instructure_ajax_error_box_link">Close</a></div>
    <iframe id="instructure_ajax_error_result" src="about:blank" style="border: 0;"></iframe>
  </div>

  

  <div id="wrapper-container" class="ic-app-container">
    <div id="wrapper" class="ic-app-main-layout-vertical">
        <div class="ic-app-nav-toggle-and-crumbs">
            <button type="button" aria-hidden="true" id="courseMenuToggle" class="Button Button--link Button--small ic-app-course-nav-toggle" title="Show and hide courses menu"><i class="icon-hamburger"></i></button> 
            <div class="ic-app-crumbs">
          <nav aria-label="breadcrumbs" id="breadcrumbs" role="navigation"><ul><li class="home"><a href="/"><span class="ellipsible">      <i class="icon-home"
         title="My Dashboard">
        <span class="screenreader-only">My Dashboard</span>
      </i>
</span></a></li><li><a href="/courses/341215"><span class="ellipsible">Web Programming and Development</span></a></li><li><a href="/courses/341215/files"><span class="ellipsible">Files</span></a></li><li><a href="/courses/341215/files/49707467"><span class="ellipsible">form_submission.sh</span></a></li></ul></nav>
          </div>
        </div>
    <div class="ic-app-main-layout-horizontal">
          <div id="left-side" class="list-view ic-app-course-menu">
              <span id="section-tabs-header-subtitle" class="ellipsis">2015-2016</span>
            <nav aria-label="context" role="navigation"><ul id="section-tabs"><li class="section"><a class="home" href="/courses/341215">Home</a></li><li class="section section-tab-hidden"><a aria-label="Course Announcements" class="announcements" href="/courses/341215/announcements">Announcements<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section"><a class="modules" href="/courses/341215/modules">Modules</a></li><li class="section"><a aria-label="Course Grades" class="grades" href="/courses/341215/grades">Grades</a></li><li class="section section-tab-hidden"><a aria-label="Course Discussions" class="discussions" href="/courses/341215/discussion_topics">Discussions<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="quizzes" href="/courses/341215/quizzes">Quizzes<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a aria-label="Course Files" class="files active" href="/courses/341215/files">Files<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a aria-label="Course Assignments" class="assignments" href="/courses/341215/assignments">Assignments<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="syllabus" href="/courses/341215/assignments/syllabus">Syllabus<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="pages" href="/courses/341215/wiki">Pages<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="outcomes" href="/courses/341215/outcomes">Outcomes<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="people" href="/courses/341215/users">People<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="collaborations" href="/courses/341215/collaborations">Collaborations<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section section-tab-hidden"><a class="conferences" href="/courses/341215/conferences">Conferences<span class="screenreader-only" id="inactive_nav_link">* No content has been added</span></a></li><li class="section"><a aria-label="Course Settings" class="settings" href="/courses/341215/settings">Settings</a></li></ul></nav>
        </div>
        <div id="main" class="ic-app-main-and-right-side">
          <div id="not_right_side" class="ic-app-main-content">
            <div id="content-wrapper" class="ic-app-main-content__primary">
                
                
              <div id="content" role="main" >
                    <h2>form_submission.sh</h2>
    <span style="font-size: 1.2em;">
      <a href="/courses/341215/files/49707467/download">Download form_submission.sh</a>
    </span> (379 Bytes)
    <div id="doc_preview" data-attachment_id=49707467 data-mimetype=application/x-shellscript data-attachment_view_inline_ping_url=https://matc.instructure.com/courses/341215/files/49707467/inline_view ></div>
  <div id="sequence_footer" data-course-id="341215" data-asset-id="49707467" data-asset-type="File"></div>



              </div>
            </div>
            <div id="right-side-wrapper" class="ic-app-main-content__secondary">
              <aside id="right-side" role="complementary">
                
              </aside>
            </div>
          </div>
        </div>
      </div>
      <footer role="contentinfo" id="footer" class="ic-app-footer">
  <a href="http://www.instructure.com" class="footer-logo ic-app-footer__logo-link">
    <span class="screenreader-only">
      By Instructure
    </span>
  </a>
  <div
      id="footer-links"
    class="ic-app-footer__links">
    <a target="_blank" href="http://eepurl.com/1LSkT">User Research</a>
    <a href="https://matc.instructure.com/privacy_policy">Privacy policy</a>
<a href="https://matc.instructure.com/terms_of_use">Terms of service</a>
<a href="http://facebook.com/instructure">Facebook</a>
<a href="http://twitter.com/instructure">Twitter</a>

  </div>
  </footer>
    </div>
  </div>



    <div style="display:none;"><!-- Everything inside of this should always stay hidden -->
        <a href="/page_views/b182adad-866f-4afb-a77d-9a6facf4783c" id="page_view_update_path">&nbsp;</a>
        <div id="page_view_id">b182adad-866f-4afb-a77d-9a6facf4783c</div>
    </div>
    <div id="cant_record_dialog" style="display: none;">
  <div>
    In order to create video or audio recordings your computer needs to be 
    webcam-enabled.  If you don&#x27;t have a webcam on your computer, you can still
    record audio-only messages by first installing the Google Video Chat
    plugin.
  </div>
  <div style="text-align: center; font-size: 1.5em; margin: 10px;">
    <a href="http://www.google.com/chat/video" target="_blank" class="btn">Install the Video Plugin</a>
  </div>
  <div class="links" style="text-align: right; font-size: 0.8em; display: none;">
    <a href="#" class="cant_record_link">Don&#x27;t have a webcam?</a>
  </div>
</div>
  <div id='aria_alerts' class='hide-text affix' role="alert" aria-live="assertive"></div>
  <script>
  INST = {"environment":"production","allowMediaComments":true,"kalturaSettings":{"domain":"nv.instructuremedia.com","resource_domain":"nv.instructuremedia.com","rtmp_domain":"fms-prod.instructuremedia.com","partner_id":"9","subpartner_id":"0","player_ui_conf":"0","kcw_ui_conf":"0","upload_ui_conf":"0","max_file_size_bytes":534773760,"do_analytics":false,"hide_rte_button":false,"js_uploader":true},"googleAnalyticsAccount":"UA-9138420-1","disableScribdPreviews":true,"enableHtml5FirstVideos":true,"logPageViews":true,"maxVisibleEditorButtons":3,"editorButtons":[{"name":"SchoolTube Video","id":197,"url":"https:\/\/lti-examples.heroku.com\/tool_redirect?url=%2Fschooltube.html","icon_url":"https:\/\/lti-examples.heroku.com\/icons\/schooltube.png","width":660,"height":450},{"name":"Khan Academy","id":4423,"url":"https:\/\/www.edu-apps.org\/tool_redirect?id=khan_academy","icon_url":"https:\/\/www.edu-apps.org\/tools\/khan_academy\/icon.png","width":690,"height":530},{"name":"YouTube","id":4424,"url":"https:\/\/www.edu-apps.org\/tool_redirect?id=youtube","icon_url":"https:\/\/www.edu-apps.org\/tools\/youtube\/icon.png","width":690,"height":530},{"name":"Quizlet Flash Cards","id":4425,"url":"https:\/\/www.edu-apps.org\/tool_redirect?id=quizlet","icon_url":"https:\/\/www.edu-apps.org\/tools\/quizlet\/icon.png","width":690,"height":510},{"name":"Embed Kaltura Media","id":6366,"url":"https:\/\/1661531.kaf.kaltura.com\/browseandembed\/index\/browseandembed","icon_url":"https:\/\/cdnsecakmi.kaltura.com\/content\/uiconf\/canvas\/kaltura_sun.png","width":1100,"height":600},{"name":"Vimeo","id":11769,"url":"https:\/\/www.edu-apps.org\/lti_public_resources\/?tool_id=vimeo","icon_url":"https:\/\/www.edu-apps.org\/assets\/lti_public_resources\/vimeo_icon.png","width":560,"height":600},{"name":"Vimeo","id":12039,"url":"https:\/\/www.edu-apps.org\/lti_public_resources\/?tool_id=vimeo","icon_url":"https:\/\/www.edu-apps.org\/assets\/lti_public_resources\/vimeo_icon.png","width":560,"height":600}]};
  ENV = {"ASSET_HOST":"https:\/\/du11hjcvx0uqb.cloudfront.net","active_brand_config":null,"url_to_what_gets_loaded_inside_the_tinymce_editor_css":"https:\/\/du11hjcvx0uqb.cloudfront.net\/dist\/brandable_css\/new_styles_normal_contrast\/bundles\/what_gets_loaded_inside_the_tinymce_editor-245090d232.css","current_user_id":"1463491","current_user":{"id":"1463491","display_name":"Jonny Fewkes","avatar_image_url":"https:\/\/secure.gravatar.com\/avatar\/0dce8d215b271c2d43d31756cfe2b18b?s=50\u0026d=https%3A%2F%2Fcanvas.instructure.com%2Fimages%2Fmessages%2Favatar-50.png","html_url":"https:\/\/matc.instructure.com\/about\/1463491"},"current_user_roles":["user","teacher"],"files_domain":"cluster2-files.instructure.com","DOMAIN_ROOT_ACCOUNT_ID":20000000000007,"use_new_styles":true,"k12":false,"use_high_contrast":false,"SETTINGS":{"open_registration":true},"badge_counts":{"submissions":0},"context_asset_string":"course_341215","ping_url":"https:\/\/matc.instructure.com\/api\/v1\/courses\/341215\/ping","TIMEZONE":"America\/Denver","CONTEXT_TIMEZONE":"America\/Denver","LOCALE":"en-US","TOURS":[],"notices":[],"HAS_COURSES":true,"HAS_GROUPS":false,"HAS_ACCOUNTS":false,"HELP_LINK":"\u003ca href=\"http:\/\/help.instructure.com\/\" class=\"support_url help_dialog_trigger ic-app-header__menu-list-link\" data-track-category=\"help system\" data-track-label=\"help button\"\u003e\u003cdiv class=\"menu-item-icon-container\" role=\"presentation\"\u003e\u003csvg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"ic-icon-svg ic-icon-svg--help\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 280 280\" enable-background=\"new 0 0 280 280\" xml:space=\"preserve\"\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_2_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-557-42h-3v-3h3V-42zM-572-57h27v27h-27V-57z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-560\" y=\"-45\" clip-path=\"url(#SVGID_4_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_6_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-557-24h-3v-3h3V-24zM-572-39h27v27h-27V-39z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-560\" y=\"-27\" clip-path=\"url(#SVGID_8_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_10_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-539-33h-3v-3h3V-33zM-554-48h27v27h-27V-48z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-542\" y=\"-36\" clip-path=\"url(#SVGID_12_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_14_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-539-42h-3v-3h3V-42zM-554-57h27v27h-27V-57z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-542\" y=\"-45\" clip-path=\"url(#SVGID_16_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_18_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-539-24h-3v-3h3V-24zM-554-39h27v27h-27V-39z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-542\" y=\"-27\" clip-path=\"url(#SVGID_20_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_22_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-557-33h-3v-3h3V-33zM-572-48h27v27h-27V-48z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-560\" y=\"-36\" clip-path=\"url(#SVGID_24_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_26_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-548-42h-3v-3h3V-42zM-563-57h27v27h-27V-57z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-551\" y=\"-45\" clip-path=\"url(#SVGID_28_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_30_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-548-24h-3v-3h3V-24zM-563-39h27v27h-27V-39z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-551\" y=\"-27\" clip-path=\"url(#SVGID_32_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cdefs\u003e\u003crect x=\"-580\" y=\"-372\" width=\"1440\" height=\"1024\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003cg clip-path=\"url(#SVGID_34_)\"\u003e\u003cdefs\u003e\u003cpath d=\"M-548-33h-3v-3h3V-33zM-563-48h27v27h-27V-48z\"\/\u003e\u003c\/defs\u003e\u003cclipPath\u003e\u003cuse overflow=\"visible\"\/\u003e\u003c\/clipPath\u003e\u003crect x=\"-551\" y=\"-36\" clip-path=\"url(#SVGID_36_)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" width=\"3\" height=\"3\"\/\u003e\u003c\/g\u003e\u003cpath d=\"M140 20c32.1 0 62.2 12.5 84.9 35.1C247.5 77.8 260 107.9 260 140s-12.5 62.2-35.1 84.9C202.2 247.5 172.1 260 140 260s-62.2-12.5-84.9-35.1C32.5 202.2 20 172.1 20 140s12.5-62.2 35.1-84.9C77.8 32.5 107.9 20 140 20M140 0C62.7 0 0 62.7 0 140s62.7 140 140 140 140-62.7 140-140S217.3 0 140 0L140 0z\"\/\u003e\u003cpath d=\"M94.7 109.3c0-5.7 1.8-11.5 5.5-17.4 3.7-5.9 9.1-10.8 16.1-14.6 7.1-3.9 15.3-5.8 24.7-5.8 8.7 0 16.5 1.6 23.2 4.8 6.7 3.2 11.9 7.6 15.5 13.2 3.7 5.6 5.5 11.6 5.5 18.1 0 5.1-1 9.6-3.1 13.5 -2.1 3.9-4.6 7.2-7.4 10 -2.9 2.8-8 7.5-15.4 14.2 -2.1 1.9-3.7 3.5-4.9 4.9 -1.2 1.4-2.2 2.7-2.8 3.9 -0.6 1.2-1.1 2.4-1.4 3.5 -0.3 1.2-0.8 3.2-1.5 6.2 -1.1 6.3-4.7 9.4-10.8 9.4 -3.1 0-5.8-1-7.9-3.1 -2.1-2.1-3.2-5.1-3.2-9.1 0-5.1 0.8-9.5 2.4-13.2 1.6-3.7 3.7-7 6.2-9.8 2.6-2.8 6.1-6.1 10.5-10 3.9-3.4 6.7-5.9 8.4-7.6 1.7-1.7 3.2-3.6 4.3-5.7 1.2-2.1 1.8-4.4 1.8-6.9 0-4.8-1.8-8.9-5.4-12.2 -3.6-3.3-8.2-5-13.9-5 -6.6 0-11.5 1.7-14.7 5 -3.1 3.3-5.8 8.3-8 14.8 -2.1 6.8-5.9 10.2-11.7 10.2 -3.4 0-6.2-1.2-8.6-3.6C95.9 114.7 94.7 112.1 94.7 109.3zM138.9 208.5c-3.7 0-6.9-1.2-9.6-3.6 -2.7-2.4-4.1-5.7-4.1-10 0-3.8 1.3-7 4-9.6 2.7-2.6 5.9-3.9 9.8-3.9 3.8 0 7 1.3 9.6 3.9 2.6 2.6 3.9 5.8 3.9 9.6 0 4.2-1.4 7.5-4.1 10C145.6 207.3 142.5 208.5 138.9 208.5z\"\/\u003e\u003c\/svg\u003e\u003c\/div\u003e\u003cdiv class=\"menu-item__text\"\u003eHelp\u003c\/div\u003e\u003c\/a\u003e","GLOBAL_NAV_MENU_ITEMS":[]};

  // TODO: move this out when we have a single require call
  require = {
    translate: true,
    baseUrl: '/optimized',
    paths: {
    "common":"compiled\/bundles\/common",
    "jqueryui":"vendor\/jqueryui",
    "uploadify":"..\/flash\/uploadify\/jquery.uploadify-3.2.min",
    "compiled\/tinymce":"compiled\/tinymce.js?v2",
    "demo_site":"plugins\/demo_site",
    "migration_tool":"plugins\/migration_tool",
    "instructure_misc_plugin":"plugins\/instructure_misc_plugin",
    "analytics":"plugins\/analytics",
    "multiple_root_accounts":"plugins\/multiple_root_accounts",
    "canvasnet_registration":"plugins\/canvasnet_registration",
    "compiled\/registration\/main_without_extensions":"compiled\/registration\/main",
    "compiled\/registration\/main":"compiled\/registration\/main_with_extensions",
    "compiled\/registration\/signupDialog_without_extensions":"compiled\/registration\/signupDialog",
    "compiled\/registration\/signupDialog":"compiled\/registration\/signupDialog_with_extensions",
    "compiled\/bundles\/modules\/account_quota_settings_without_extensions":"compiled\/bundles\/modules\/account_quota_settings",
    "compiled\/bundles\/modules\/account_quota_settings":"compiled\/bundles\/modules\/account_quota_settings_with_extensions",
    "canvas_quizzes":"client_apps\/canvas_quizzes",
    "app\/config\/environments\/production":"empty:"},
    packages : [{"name":"ic-ajax","location":"bower\/ic-ajax\/dist\/amd"},{"name":"ic-styled","location":"bower\/ic-styled"},{"name":"ic-menu","location":"bower\/ic-menu"},{"name":"ic-tabs","location":"bower\/ic-tabs\/dist\/amd"},{"name":"ic-droppable","location":"bower\/ic-droppable\/dist\/amd"},{"name":"ic-sortable","location":"bower\/ic-sortable\/dist\/amd"},{"name":"ic-modal","location":"bower\/ic-modal\/dist\/amd"},{"name":"ic-lazy-list","location":"bower\/ic-lazy-list"},{"name":"ember-qunit","location":"bower\/ember-qunit\/dist\/amd"}],
    shim: {
    'bower/react-router/dist/react-router': {
      deps: ['react'],
      exports: 'ReactRouter'
    },
    'bower/react-tray/dist/react-tray': {
      deps: ['react']
    },
    'bower/react-modal/dist/react-modal': {
      deps: ['react']
    },
    'bower/react-tokeninput/dist/react-tokeninput': {
      deps: ['react'],
    },
    'bower/react-select-box/dist/react-select-box': {
      deps: ['react'],
    },
    'bower/ember/ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'bower/ember-data/ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    'bower/handlebars/handlebars.runtime': {
      exports: 'Handlebars'
    },
    'vendor/FileAPI/FileAPI.min': {
      deps: ['jquery', 'vendor/FileAPI/config'],
      exports: 'FileAPI'
    },
    'uploadify': {
      deps: ['jquery'],
      exports: '$'
    },
    'vendor/bootstrap-select/bootstrap-select' : {
      deps: ['jquery'],
      exports: '$'
    },
    'vendor/jquery.jcrop': {
      deps: ['jquery'],
      exports: '$'
    },
    'vendor/jquery.smartbanner': {
      deps: ['jquery'],
      exports: '$'
    },
    'handlebars': {
      deps: ['bower/handlebars/handlebars.runtime.amd'],
      exports: 'Handlebars'
    },
    'vendor/i18n': {
      exports: 'I18n'
    },
    'vendor/react-infinite-scroll.min' : {
      deps: ['react'],
      exports: 'InfiniteScroll'
    },
    'bower/tinymce/tinymce' : {
      exports: 'tinymce'
    },
    'bower/tinymce/themes/modern/theme' : {
      deps: ['bower/tinymce/tinymce'],
      exports: 'tinymce'
    }
  }
,
    map: {"canvas_quizzes":{"lodash":"underscore","d3":"vendor\/d3.v3","backbone":"vendor\/backbone","jquery\/instructure_date_and_time":"jquery.instructure_date_and_time","react":"old_unsupported_dont_use_react","react-router":"old_unsupported_dont_use_react-router"}},
    waitSeconds: 60
  };
</script>

<script src="https://du11hjcvx0uqb.cloudfront.net/dist/optimized/vendor/require-749d0c60e9.js" type="text/javascript"></script>

<script src="https://du11hjcvx0uqb.cloudfront.net/dist/optimized/compiled/bundles/common-1fc630f7be.js" type="text/javascript"></script>
<script src="https://du11hjcvx0uqb.cloudfront.net/dist/optimized/compiled/bundles/module_sequence_footer-76c598c655.js" type="text/javascript"></script>
<script src="https://du11hjcvx0uqb.cloudfront.net/dist/optimized/compiled/bundles/file_show-7864620d49.js" type="text/javascript"></script>
<script src="https://du11hjcvx0uqb.cloudfront.net/dist/optimized/compiled/bundles/navigation_header-a22337e8b3.js" type="text/javascript"></script>




<script>
// Determines if the scripts are loaded.
// When we get everything out of the views, and have a single top-level
// `require`, this becomes meaningless and will be abandoned.
(function() {
  var attempts = 0;
  var timeout = 10;
  var check = function() {
    attempts++;
    var done = !window.requirejs.s.contexts._.defQueue.length
    var giveup = attempts === 100; // 1 second
    if (done || giveup) {
      var className = document.documentElement.className;
      document.documentElement.className = className.replace(/scripts-not-loaded/, '');
      return;
    }
    setTimeout(check, timeout);
  };

  check();
}).call(this);
</script>


</div> <!-- #application -->
</body>
</html>
