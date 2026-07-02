# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\team.spec.js >> Team >> adds a new team member
- Location: tests\e2e\team.spec.js:12:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Search' })
    - locator resolved to <input type="text" placeholder="Search"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fade offcanvas-backdrop show"></div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fade offcanvas-backdrop show"></div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    107 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="fade offcanvas-backdrop show"></div> intercepts pointer events
      - retrying click action
        - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "sidebarLogoImg" [ref=e7]
        - generic:
          - img "sidebarLogoTxt"
      - generic [ref=e8]:
        - link "sidebarIcon2 Patients" [ref=e10] [cursor=pointer]:
          - /url: /patient
          - generic [ref=e11]:
            - img "sidebarIcon2" [ref=e12]
            - generic: Patients
        - link "sidebarIcon3 Chat" [ref=e14] [cursor=pointer]:
          - /url: /chat
          - generic [ref=e15]:
            - img "sidebarIcon3" [ref=e16]
            - generic: Chat
        - link "sidebarIcon4 Team" [ref=e18] [cursor=pointer]:
          - /url: /team
          - generic [ref=e19]:
            - img "sidebarIcon4" [ref=e20]
            - generic: Team
        - link "Survey" [ref=e22] [cursor=pointer]:
          - /url: /survey#templates
          - generic [ref=e23]:
            - img [ref=e24]
            - generic: Survey
        - link "Tasks" [ref=e27] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e28]:
            - img [ref=e29]
            - generic: Tasks
        - link "Coupons" [ref=e32] [cursor=pointer]:
          - /url: /coupon
          - generic [ref=e33]:
            - img [ref=e34]
            - generic: Coupons
    - generic [ref=e39]:
      - generic [ref=e41]:
        - link "Team" [ref=e42] [cursor=pointer]:
          - /url: /team
          - heading "Team" [level=3] [ref=e43]
        - generic [ref=e44]: (182)
      - generic [ref=e46]:
        - generic [ref=e47]:
          - button "notification" [ref=e48] [cursor=pointer]:
            - img "notification" [ref=e49]
          - generic: "0"
        - generic [ref=e50]:
          - img [ref=e52]
          - generic [ref=e57] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e58]
            - generic [ref=e59]: Admin • Diabetologist
    - generic [ref=e60]:
      - generic [ref=e63]:
        - generic [ref=e64]:
          - generic [ref=e66]:
            - img [ref=e68]
            - textbox "Search" [ref=e70]
          - button "Add User" [ref=e75] [cursor=pointer]:
            - generic [ref=e76]:
              - img [ref=e78]
              - text: Add User
        - table [ref=e84]:
          - rowgroup [ref=e85]:
            - row "Name ▲ Phone Number ▲ Role ▲ Job Title ▲ Patients Assigned ▲ Recent Activity ▲ Status ▲" [ref=e86]:
              - columnheader "Name ▲" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]: Name
                - generic [ref=e90]: ▲
              - columnheader "Phone Number ▲" [ref=e92] [cursor=pointer]:
                - generic [ref=e93]: Phone Number
                - generic [ref=e94]: ▲
              - columnheader "Role ▲" [ref=e96] [cursor=pointer]:
                - generic [ref=e97]: Role
                - generic [ref=e98]: ▲
              - columnheader "Job Title ▲" [ref=e100] [cursor=pointer]:
                - generic [ref=e101]: Job Title
                - generic [ref=e102]: ▲
              - columnheader "Patients Assigned ▲" [ref=e104] [cursor=pointer]:
                - generic [ref=e105]: Patients Assigned
                - generic [ref=e106]: ▲
              - columnheader "Recent Activity ▲" [ref=e108] [cursor=pointer]:
                - generic [ref=e109]: Recent Activity
                - generic [ref=e110]: ▲
              - columnheader "Status ▲" [ref=e112] [cursor=pointer]:
                - generic [ref=e113]: Status
                - generic [ref=e114]: ▲
          - rowgroup [ref=e116]:
            - row "Kaleem Asad Kaleem Asad +46726405823 Admin Nurse 29 7th January 2026 at 3:05 PM ACTIVATED" [ref=e117]:
              - cell "Kaleem Asad Kaleem Asad" [ref=e118]:
                - generic [ref=e119]:
                  - img "Kaleem Asad" [ref=e121] [cursor=pointer]
                  - generic [ref=e123]: Kaleem Asad
              - cell "+46726405823" [ref=e124]:
                - generic [ref=e125]: "+46726405823"
              - cell "Admin" [ref=e126]
              - cell "Nurse" [ref=e127]
              - cell "29" [ref=e128]
              - cell "7th January 2026 at 3:05 PM" [ref=e129]
              - cell "ACTIVATED" [ref=e130]:
                - generic [ref=e131]:
                  - img [ref=e133]
                  - text: ACTIVATED
              - cell [ref=e135]:
                - button [ref=e138] [cursor=pointer]:
                  - img [ref=e139]
            - row "Pradeep Gupta - New Acc Pradeep Gupta - New Acc +918600243049 Admin Coordinator 5 1st May 2026 at 12:10 PM ACTIVATED" [ref=e141]:
              - cell "Pradeep Gupta - New Acc Pradeep Gupta - New Acc" [ref=e142]:
                - generic [ref=e143]:
                  - img "Pradeep Gupta - New Acc" [ref=e145] [cursor=pointer]
                  - generic [ref=e147]: Pradeep Gupta - New Acc
              - cell "+918600243049" [ref=e148]:
                - generic [ref=e149]: "+918600243049"
              - cell "Admin" [ref=e150]
              - cell "Coordinator" [ref=e151]
              - cell "5" [ref=e152]
              - cell "1st May 2026 at 12:10 PM" [ref=e153]
              - cell "ACTIVATED" [ref=e154]:
                - generic [ref=e155]:
                  - img [ref=e157]
                  - text: ACTIVATED
              - cell [ref=e159]:
                - button [ref=e162] [cursor=pointer]:
                  - img [ref=e163]
            - row "Sagar Jarande Sagar Jarande +918669000492 Admin Diabetologist 0 20th January 2026 at 4:06 PM ACTIVATED" [ref=e165]:
              - cell "Sagar Jarande Sagar Jarande" [ref=e166]:
                - generic [ref=e167]:
                  - img "Sagar Jarande" [ref=e169] [cursor=pointer]
                  - generic [ref=e171]: Sagar Jarande
              - cell "+918669000492" [ref=e172]:
                - generic [ref=e173]: "+918669000492"
              - cell "Admin" [ref=e174]
              - cell "Diabetologist" [ref=e175]
              - cell "0" [ref=e176]
              - cell "20th January 2026 at 4:06 PM" [ref=e177]
              - cell "ACTIVATED" [ref=e178]:
                - generic [ref=e179]:
                  - img [ref=e181]
                  - text: ACTIVATED
              - cell [ref=e183]:
                - button [ref=e186] [cursor=pointer]:
                  - img [ref=e187]
            - row "StaffUser Five5 StaffUser Five5 +46726409552 Admin Nurse 0 INVITED" [ref=e189]:
              - cell "StaffUser Five5 StaffUser Five5" [ref=e190]:
                - generic [ref=e191]:
                  - img "StaffUser Five5" [ref=e193] [cursor=pointer]
                  - generic [ref=e195]: StaffUser Five5
              - cell "+46726409552" [ref=e196]:
                - generic [ref=e197]: "+46726409552"
              - cell "Admin" [ref=e198]
              - cell "Nurse" [ref=e199]
              - cell "0" [ref=e200]
              - cell [ref=e201]
              - cell "INVITED" [ref=e202]:
                - generic [ref=e203]:
                  - img [ref=e205]
                  - text: INVITED
              - cell [ref=e207]:
                - button [ref=e210] [cursor=pointer]:
                  - img [ref=e211]
            - row "StaffUser Four StaffUser Four +46726409559 Admin Endocrinologist 0 22nd December 2025 at 2:24 PM INVITED" [ref=e213]:
              - cell "StaffUser Four StaffUser Four" [ref=e214]:
                - generic [ref=e215]:
                  - img "StaffUser Four" [ref=e217] [cursor=pointer]
                  - generic [ref=e219]: StaffUser Four
              - cell "+46726409559" [ref=e220]:
                - generic [ref=e221]: "+46726409559"
              - cell "Admin" [ref=e222]
              - cell "Endocrinologist" [ref=e223]
              - cell "0" [ref=e224]
              - cell "22nd December 2025 at 2:24 PM" [ref=e225]
              - cell "INVITED" [ref=e226]:
                - generic [ref=e227]:
                  - img [ref=e229]
                  - text: INVITED
              - cell [ref=e231]:
                - button [ref=e234] [cursor=pointer]:
                  - img [ref=e235]
            - row "StaffUser Four4 StaffUser Four4 +46726409554 Admin Life Coach 1 22nd December 2025 at 2:07 PM ACTIVATED" [ref=e237]:
              - cell "StaffUser Four4 StaffUser Four4" [ref=e238]:
                - generic [ref=e239]:
                  - img "StaffUser Four4" [ref=e241] [cursor=pointer]
                  - generic [ref=e243]: StaffUser Four4
              - cell "+46726409554" [ref=e244]:
                - generic [ref=e245]: "+46726409554"
              - cell "Admin" [ref=e246]
              - cell "Life Coach" [ref=e247]
              - cell "1" [ref=e248]
              - cell "22nd December 2025 at 2:07 PM" [ref=e249]
              - cell "ACTIVATED" [ref=e250]:
                - generic [ref=e251]:
                  - img [ref=e253]
                  - text: ACTIVATED
              - cell [ref=e255]:
                - button [ref=e258] [cursor=pointer]:
                  - img [ref=e259]
            - row "StaffUser One StaffUser One +46726405814 Admin Diabetologist 1 INVITED" [ref=e261]:
              - cell "StaffUser One StaffUser One" [ref=e262]:
                - generic [ref=e263]:
                  - img "StaffUser One" [ref=e265] [cursor=pointer]
                  - generic [ref=e267]: StaffUser One
              - cell "+46726405814" [ref=e268]:
                - generic [ref=e269]: "+46726405814"
              - cell "Admin" [ref=e270]
              - cell "Diabetologist" [ref=e271]
              - cell "1" [ref=e272]
              - cell [ref=e273]
              - cell "INVITED" [ref=e274]:
                - generic [ref=e275]:
                  - img [ref=e277]
                  - text: INVITED
              - cell [ref=e279]:
                - button [ref=e282] [cursor=pointer]:
                  - img [ref=e283]
            - row "StaffUser Six6 StaffUser Six6 +46726405822 Admin Nurse Manager 0 INVITED" [ref=e285]:
              - cell "StaffUser Six6 StaffUser Six6" [ref=e286]:
                - generic [ref=e287]:
                  - img "StaffUser Six6" [ref=e289] [cursor=pointer]
                  - generic [ref=e291]: StaffUser Six6
              - cell "+46726405822" [ref=e292]:
                - generic [ref=e293]: "+46726405822"
              - cell "Admin" [ref=e294]
              - cell "Nurse Manager" [ref=e295]
              - cell "0" [ref=e296]
              - cell [ref=e297]
              - cell "INVITED" [ref=e298]:
                - generic [ref=e299]:
                  - img [ref=e301]
                  - text: INVITED
              - cell [ref=e303]:
                - button [ref=e306] [cursor=pointer]:
                  - img [ref=e307]
            - row "Test B Account Test B Account +923314271267 Admin Diabetologist 0 INVITED" [ref=e309]:
              - cell "Test B Account Test B Account" [ref=e310]:
                - generic [ref=e311]:
                  - img "Test B Account" [ref=e313] [cursor=pointer]
                  - generic [ref=e315]: Test B Account
              - cell "+923314271267" [ref=e316]:
                - generic [ref=e317]: "+923314271267"
              - cell "Admin" [ref=e318]
              - cell "Diabetologist" [ref=e319]
              - cell "0" [ref=e320]
              - cell [ref=e321]
              - cell "INVITED" [ref=e322]:
                - generic [ref=e323]:
                  - img [ref=e325]
                  - text: INVITED
              - cell [ref=e327]:
                - button [ref=e330] [cursor=pointer]:
                  - img [ref=e331]
            - row "Test User1 Test User1 +13541231234 Physician Diabetologist 0 INVITED" [ref=e333]:
              - cell "Test User1 Test User1" [ref=e334]:
                - generic [ref=e335]:
                  - img "Test User1" [ref=e337] [cursor=pointer]
                  - generic [ref=e339]: Test User1
              - cell "+13541231234" [ref=e340]:
                - generic [ref=e341]: "+13541231234"
              - cell "Physician" [ref=e342]
              - cell "Diabetologist" [ref=e343]
              - cell "0" [ref=e344]
              - cell [ref=e345]
              - cell "INVITED" [ref=e346]:
                - generic [ref=e347]:
                  - img [ref=e349]
                  - text: INVITED
              - cell [ref=e351]:
                - button [ref=e354] [cursor=pointer]:
                  - img [ref=e355]
        - list [ref=e358]:
          - listitem:
            - img
          - listitem [ref=e359]: "1"
          - listitem [ref=e360]: "2"
          - listitem [ref=e361]: "3"
          - listitem [ref=e362]: "4"
          - listitem [ref=e363]: "5"
          - listitem [ref=e364]: …
          - listitem [ref=e365]: "19"
          - listitem [ref=e366]:
            - img [ref=e367]
      - generic [ref=e369]:
        - generic [ref=e370]:
          - paragraph [ref=e372]: Chat
          - button "delete" [ref=e373] [cursor=pointer]:
            - img [ref=e374]
        - generic [ref=e378]:
          - paragraph [ref=e379] [cursor=pointer]: Metabolic
          - paragraph [ref=e380] [cursor=pointer]: Zone
  - alert [ref=e381]
  - dialog [active] [ref=e383]:
    - generic [ref=e384]:
      - heading "Add User" [level=5] [ref=e386]
      - button "Close" [ref=e387] [cursor=pointer]
    - generic [ref=e389]:
      - generic [ref=e390]: Personal Info
      - generic [ref=e391]:
        - generic [ref=e392]:
          - generic [ref=e393]:
            - generic [ref=e394]: First Name
            - textbox "First Name" [ref=e395]: Test
          - generic [ref=e396]:
            - generic [ref=e397]: Last Name
            - textbox "Last Name" [ref=e398]: User195570
          - generic [ref=e399]:
            - generic [ref=e400]: Select Gender
            - generic [ref=e401]:
              - generic [ref=e403]:
                - text: Male
                - img [ref=e405]
              - generic [ref=e408]: Female
              - generic [ref=e410]: Other
          - generic [ref=e411]:
            - generic [ref=e412]: Phone
            - generic [ref=e414]:
              - generic [ref=e415]:
                - combobox "Phone number country" [ref=e416] [cursor=pointer]:
                  - option "International"
                  - option "Afghanistan"
                  - option "Åland Islands"
                  - option "Albania"
                  - option "Algeria"
                  - option "American Samoa"
                  - option "Andorra"
                  - option "Angola"
                  - option "Anguilla"
                  - option "Antigua and Barbuda"
                  - option "Argentina"
                  - option "Armenia"
                  - option "Aruba"
                  - option "Ascension Island"
                  - option "Australia"
                  - option "Austria"
                  - option "Azerbaijan"
                  - option "Bahamas"
                  - option "Bahrain"
                  - option "Bangladesh"
                  - option "Barbados"
                  - option "Belarus"
                  - option "Belgium"
                  - option "Belize"
                  - option "Benin"
                  - option "Bermuda"
                  - option "Bhutan"
                  - option "Bolivia"
                  - option "Bonaire, Sint Eustatius and Saba"
                  - option "Bosnia and Herzegovina"
                  - option "Botswana"
                  - option "Brazil"
                  - option "British Indian Ocean Territory"
                  - option "Brunei Darussalam"
                  - option "Bulgaria"
                  - option "Burkina Faso"
                  - option "Burundi"
                  - option "Cambodia"
                  - option "Cameroon"
                  - option "Canada"
                  - option "Cape Verde"
                  - option "Cayman Islands"
                  - option "Central African Republic"
                  - option "Chad"
                  - option "Chile"
                  - option "China"
                  - option "Christmas Island"
                  - option "Cocos (Keeling) Islands"
                  - option "Colombia"
                  - option "Comoros"
                  - option "Congo"
                  - option "Congo, Democratic Republic of the"
                  - option "Cook Islands"
                  - option "Costa Rica"
                  - option "Cote d'Ivoire"
                  - option "Croatia"
                  - option "Cuba"
                  - option "Curaçao"
                  - option "Cyprus"
                  - option "Czech Republic"
                  - option "Denmark"
                  - option "Djibouti"
                  - option "Dominica"
                  - option "Dominican Republic"
                  - option "Ecuador"
                  - option "Egypt"
                  - option "El Salvador"
                  - option "Equatorial Guinea"
                  - option "Eritrea"
                  - option "Estonia"
                  - option "Ethiopia"
                  - option "Falkland Islands"
                  - option "Faroe Islands"
                  - option "Federated States of Micronesia"
                  - option "Fiji"
                  - option "Finland"
                  - option "France"
                  - option "French Guiana"
                  - option "French Polynesia"
                  - option "Gabon"
                  - option "Gambia"
                  - option "Georgia"
                  - option "Germany"
                  - option "Ghana"
                  - option "Gibraltar"
                  - option "Greece"
                  - option "Greenland"
                  - option "Grenada"
                  - option "Guadeloupe"
                  - option "Guam"
                  - option "Guatemala"
                  - option "Guernsey"
                  - option "Guinea"
                  - option "Guinea-Bissau"
                  - option "Guyana"
                  - option "Haiti"
                  - option "Holy See (Vatican City State)"
                  - option "Honduras"
                  - option "Hong Kong"
                  - option "Hungary"
                  - option "Iceland"
                  - option "India"
                  - option "Indonesia"
                  - option "Iran"
                  - option "Iraq"
                  - option "Ireland"
                  - option "Isle of Man"
                  - option "Israel"
                  - option "Italy"
                  - option "Jamaica"
                  - option "Japan"
                  - option "Jersey"
                  - option "Jordan"
                  - option "Kazakhstan"
                  - option "Kenya"
                  - option "Kiribati"
                  - option "Kosovo"
                  - option "Kuwait"
                  - option "Kyrgyzstan"
                  - option "Laos"
                  - option "Latvia"
                  - option "Lebanon"
                  - option "Lesotho"
                  - option "Liberia"
                  - option "Libya"
                  - option "Liechtenstein"
                  - option "Lithuania"
                  - option "Luxembourg"
                  - option "Macao"
                  - option "Madagascar"
                  - option "Malawi"
                  - option "Malaysia"
                  - option "Maldives"
                  - option "Mali"
                  - option "Malta"
                  - option "Marshall Islands"
                  - option "Martinique"
                  - option "Mauritania"
                  - option "Mauritius"
                  - option "Mayotte"
                  - option "Mexico"
                  - option "Moldova"
                  - option "Monaco"
                  - option "Mongolia"
                  - option "Montenegro"
                  - option "Montserrat"
                  - option "Morocco"
                  - option "Mozambique"
                  - option "Myanmar"
                  - option "Namibia"
                  - option "Nauru"
                  - option "Nepal"
                  - option "Netherlands"
                  - option "New Caledonia"
                  - option "New Zealand"
                  - option "Nicaragua"
                  - option "Niger"
                  - option "Nigeria"
                  - option "Niue"
                  - option "Norfolk Island"
                  - option "North Korea"
                  - option "North Macedonia"
                  - option "Northern Mariana Islands"
                  - option "Norway"
                  - option "Oman"
                  - option "Pakistan"
                  - option "Palau"
                  - option "Palestine"
                  - option "Panama"
                  - option "Papua New Guinea"
                  - option "Paraguay"
                  - option "Peru"
                  - option "Philippines"
                  - option "Poland"
                  - option "Portugal"
                  - option "Puerto Rico"
                  - option "Qatar"
                  - option "Reunion"
                  - option "Romania"
                  - option "Russia"
                  - option "Rwanda"
                  - option "Saint Barthélemy"
                  - option "Saint Helena"
                  - option "Saint Kitts and Nevis"
                  - option "Saint Lucia"
                  - option "Saint Martin (French Part)"
                  - option "Saint Pierre and Miquelon"
                  - option "Saint Vincent and the Grenadines"
                  - option "Samoa"
                  - option "San Marino"
                  - option "Sao Tome and Principe"
                  - option "Saudi Arabia"
                  - option "Senegal"
                  - option "Serbia"
                  - option "Seychelles"
                  - option "Sierra Leone"
                  - option "Singapore"
                  - option "Sint Maarten"
                  - option "Slovakia"
                  - option "Slovenia"
                  - option "Solomon Islands"
                  - option "Somalia"
                  - option "South Africa"
                  - option "South Korea"
                  - option "South Sudan"
                  - option "Spain"
                  - option "Sri Lanka"
                  - option "Sudan"
                  - option "Suriname"
                  - option "Svalbard and Jan Mayen"
                  - option "Swaziland"
                  - option "Sweden"
                  - option "Switzerland"
                  - option "Syria"
                  - option "Taiwan"
                  - option "Tajikistan"
                  - option "Tanzania"
                  - option "Thailand"
                  - option "Timor-Leste"
                  - option "Togo"
                  - option "Tokelau"
                  - option "Tonga"
                  - option "Trinidad and Tobago"
                  - option "Tristan da Cunha"
                  - option "Tunisia"
                  - option "Turkey"
                  - option "Turkmenistan"
                  - option "Turks and Caicos Islands"
                  - option "Tuvalu"
                  - option "Uganda"
                  - option "Ukraine"
                  - option "United Arab Emirates"
                  - option "United Kingdom"
                  - option "United States" [selected]
                  - option "Uruguay"
                  - option "Uzbekistan"
                  - option "Vanuatu"
                  - option "Venezuela"
                  - option "Vietnam"
                  - option "Virgin Islands, British"
                  - option "Virgin Islands, U.S."
                  - option "Wallis and Futuna"
                  - option "Western Sahara"
                  - option "Yemen"
                  - option "Zambia"
                  - option "Zimbabwe"
                - img [ref=e418]
              - textbox "(XXX) XXX XXX" [ref=e420]: (354) 123-1234
          - generic [ref=e421]: Professional Info
          - generic [ref=e422]:
            - generic [ref=e423]: Select Role
            - generic [ref=e424]:
              - generic [ref=e426]:
                - text: Physician
                - img [ref=e428]
              - generic [ref=e431]: Coach
              - generic [ref=e433]: Admin
          - generic [ref=e434]:
            - generic [ref=e435]: Job Title
            - generic [ref=e438]:
              - log [ref=e440]
              - generic [ref=e441] [cursor=pointer]:
                - generic [ref=e442]:
                  - generic [ref=e443]: Diabetologist
                  - combobox [ref=e445]
                - img [ref=e448]
        - generic [ref=e451]:
          - button "Add User" [ref=e452] [cursor=pointer]:
            - generic [ref=e453]: Add User
          - button "Cancel" [ref=e454] [cursor=pointer]:
            - generic [ref=e455]: Cancel
```

# Test source

```ts
  1  | class TeamPage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     // ── Navigation ────────────────────────────────────────────────
  7  |     this.teamTab = page.getByRole('link', { name: 'sidebarIcon4 Team' });
  8  | 
  9  |     // ── Add User dialog ──────────────────────────────────────────
  10 |     this.addUserBtn       = page.getByRole('button', { name: 'Add User' });
  11 |     this.firstNameInput   = page.getByRole('textbox', { name: 'First Name' });
  12 |     this.lastNameInput    = page.getByRole('textbox', { name: 'Last Name' });
  13 |     this.phoneInput       = page.getByRole('textbox', { name: '(XXX) XXX XXX' });
  14 |     this.jobTitleDropdown = page.locator('div').filter({ hasText: /^Select Job Title$/ });
  15 |     this.dialogAddUserBtn = page.getByRole('dialog').getByRole('button', { name: 'Add User' });
  16 | 
  17 |     // ── Search / list ─────────────────────────────────────────────
  18 |     this.searchInput   = page.getByRole('textbox', { name: 'Search' });
  19 |     this.clearFilterBtn = page.getByRole('button', { name: 'Clear Filter' });
  20 | 
  21 |     // ── Row actions ───────────────────────────────────────────────
  22 |     this.editInfoOption = page.getByText('Edit Info');
  23 |     this.editUserBtn    = page.getByRole('button', { name: 'Edit User' });
  24 |   }
  25 | 
  26 |   // ── Navigate to Team tab ───────────────────────────────────────
  27 |   async openTeamTab() {
  28 |     await this.teamTab.click();
  29 |     await this.addUserBtn.waitFor({ state: 'visible', timeout: 15000 });
  30 |   }
  31 | 
  32 |   // ── Add a new team member ──────────────────────────────────────
  33 |   // gender: 'Male' | 'Female'
  34 |   async addUser({ firstName, lastName, gender = 'Male', phone, jobCategory = 'Physician', jobTitle }) {
  35 |     await this.addUserBtn.click();
  36 | 
  37 |     await this.firstNameInput.click();
  38 |     await this.firstNameInput.fill(firstName);
  39 |     await this.lastNameInput.fill(lastName);
  40 | 
  41 |     const dialog = this.page.getByRole('dialog');
  42 | 
  43 |     if (gender) {
  44 |       await dialog.getByText(gender, { exact: true }).click();
  45 |     }
  46 | 
  47 |     if (phone) {
  48 |       await this.phoneInput.click();
  49 |       await this.phoneInput.fill(phone);
  50 |     }
  51 | 
  52 |     if (jobCategory) {
  53 |       // Scope to dialog — table rows behind it also contain role/job-title text
  54 |       await dialog.getByText(jobCategory, { exact: true }).click();
  55 |     }
  56 | 
  57 |     if (jobTitle) {
  58 |       await this.jobTitleDropdown.nth(4).click();
  59 |       await this.page.getByRole('option', { name: jobTitle }).click();
  60 |     }
  61 | 
  62 |     await this.dialogAddUserBtn.click();
  63 |   }
  64 | 
  65 |   // ── Search for a team member ───────────────────────────────────
  66 |   async searchUser(query) {
> 67 |     await this.searchInput.click();
     |                            ^ Error: locator.click: Test timeout of 60000ms exceeded.
  68 |     await this.searchInput.fill(query);
  69 |     await this.page.waitForTimeout(500);
  70 |   }
  71 | 
  72 |   // ── Clear active filter ─────────────────────────────────────────
  73 |   async clearFilter() {
  74 |     await this.clearFilterBtn.click();
  75 |   }
  76 | 
  77 |   // ── Open row actions dropdown by row name and select an option ──
  78 |   async openRowMenuByName(rowName, optionText) {
  79 |     const row = this.page.getByRole('row', { name: new RegExp(rowName) });
  80 |     await row.locator('#dropdown-basic').click();
  81 |     await this.page.getByText(optionText, { exact: true }).click();
  82 |   }
  83 | 
  84 |   // ── Edit a user by name (search → open dropdown → Edit Info) ───
  85 |   async editUserByName(fullName, updates = {}) {
  86 |     await this.searchUser(fullName);
  87 |     await this.page.getByText(fullName, { exact: true }).click();
  88 | 
  89 |     // Open the row's dropdown menu via the cell dropdown selector
  90 |     const dropdownBtn = this.page.locator('[id^="row-"] [id^="cell-"] #dropdown-basic').first();
  91 |     await dropdownBtn.click();
  92 |     await this.editInfoOption.click();
  93 | 
  94 |     // Apply any field updates here if needed in the future
  95 |     await this.editUserBtn.click();
  96 |   }
  97 | }
  98 | 
  99 | module.exports = { TeamPage };
```