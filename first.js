//linking to google font

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href ="https://cdn.jsdelivr.net/gh/habibullaharafat23/www.flowerbulbsamsterdam.nl@f4c0510362dea8adae99c7234333763323374f94/style.css";
//  link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);

//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Consent</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Details</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">About</h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Necessary</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Preferences</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analytics</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Cookies are small text files that can be used by websites to make a user's experience more efficient.</span>
          <span class="sec3Content">The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. This means that cookies which are categorized as necessary, are processed based on GDPR Art. 6 (1) (f). All other cookies, meaning those from the categories preferences and marketing, are processed based on GDPR Art. 6 (1) (a) GDPR.</span>

          <span class="sec3Content">This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</span>
          
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action="accept" class="action-btn active" id=acceptConsentButton>ACCEPT</button>
      <button action="reject" class="action-btn" id="rejectConsentButton" style="display:none">REJECT</button>
      <button action="preference" class="action-btn" id="preferenceConsentButton">PREFERENCE</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`;

document.body.appendChild(consentdiv);
