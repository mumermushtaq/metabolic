# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\patient-listings.spec.js >> Patient Listings — @patients >> should display all filter fields in modal
- Location: tests\e2e\patient-listings.spec.js:137:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('dialog').getByText('Age')
Expected: visible
Error: strict mode violation: getByRole('dialog').getByText('Age') resolved to 2 elements:
    1) <label for="Language-id" class="FilterSelect_filterLabel__hJLZd">Language</label> aka getByText('Language')
    2) <label for="age-from" class="AgeInput_filterLabel__zS2x7">Age</label> aka getByText('Age', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('dialog').getByText('Age')

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
        - link "Patients" [ref=e42] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e43]
        - generic [ref=e44]: (7895)
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
      - generic [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: Search
              - textbox "Search" [ref=e67]
            - button "Filter" [ref=e69] [cursor=pointer]:
              - generic [ref=e70]:
                - img [ref=e72]
                - text: Filter
          - generic [ref=e74]:
            - button [ref=e76] [cursor=pointer]:
              - img [ref=e78]
            - button "Add Patient" [ref=e81] [cursor=pointer]:
              - generic [ref=e82]:
                - img [ref=e84]
                - text: Add Patient
            - button "Add Patient (MRN)" [ref=e87] [cursor=pointer]:
              - generic [ref=e88]:
                - img [ref=e90]
                - text: Add Patient (MRN)
        - generic [ref=e92]:
          - generic [ref=e93]: "Saved Filters:"
          - generic [ref=e94]:
            - generic [ref=e96]:
              - generic [ref=e97] [cursor=pointer]: Male | English | Weight Loss
              - button [ref=e99] [cursor=pointer]:
                - img [ref=e101]
            - generic [ref=e104]:
              - generic [ref=e105] [cursor=pointer]: Age 20-24
              - button [ref=e107] [cursor=pointer]:
                - img [ref=e109]
            - generic [ref=e112]:
              - generic [ref=e113] [cursor=pointer]: Verified Users | BCA Scan from July
              - button [ref=e115] [cursor=pointer]:
                - img [ref=e117]
            - generic [ref=e120]:
              - generic [ref=e121] [cursor=pointer]: Primary Staff | Male
              - button [ref=e123] [cursor=pointer]:
                - img [ref=e125]
            - generic [ref=e128]:
              - generic [ref=e129] [cursor=pointer]: test waleed updated
              - button [ref=e131] [cursor=pointer]:
                - img [ref=e133]
            - generic [ref=e136]:
              - generic [ref=e137] [cursor=pointer]: new moiz test
              - button [ref=e139] [cursor=pointer]:
                - img [ref=e141]
            - generic [ref=e144]:
              - generic [ref=e145] [cursor=pointer]: Umer's Test filter
              - button [ref=e147] [cursor=pointer]:
                - img [ref=e149]
            - generic [ref=e152]:
              - generic [ref=e153] [cursor=pointer]: Test - Diagnoses - Hassam
              - button [ref=e155] [cursor=pointer]:
                - img [ref=e157]
            - generic [ref=e160]:
              - generic [ref=e161] [cursor=pointer]: Male Filter
              - button [ref=e163] [cursor=pointer]:
                - img [ref=e165]
      - generic [ref=e169]:
        - table [ref=e173]:
          - rowgroup [ref=e174]:
            - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Verification Date ▲ Patient Program ▲" [ref=e175]:
              - columnheader "Patient ▲" [ref=e178] [cursor=pointer]:
                - generic [ref=e179]: Patient
                - generic [ref=e180]: ▲
              - columnheader "Diagnosis ▲" [ref=e182] [cursor=pointer]:
                - generic [ref=e183]: Diagnosis
                - generic [ref=e184]: ▲
              - columnheader "TIR ▲" [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: TIR
                - generic [ref=e188]: ▲
              - columnheader "Food Log ▲" [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Food Log
                - generic [ref=e192]: ▲
              - columnheader "Weight ▲" [ref=e194] [cursor=pointer]:
                - generic [ref=e195]: Weight
                - generic [ref=e196]: ▲
              - columnheader "Active Chats ▲" [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: Active Chats
                - generic [ref=e200]: ▲
              - columnheader "Status ▲" [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: Status
                - generic [ref=e204]: ▲
              - columnheader "Verification Date ▲" [ref=e206] [cursor=pointer]:
                - generic [ref=e207]: Verification Date
                - generic [ref=e208]: ▲
              - columnheader "Patient Program ▲" [ref=e210] [cursor=pointer]:
                - generic [ref=e211]: Patient Program
                - generic [ref=e212]: ▲
          - rowgroup [ref=e214]:
            - row "Expand Row avatar sds 111 morta 111 2222 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9 10% 0 111 104 No VERIFIED December 10, 2025 12:00 AM Diabetes" [ref=e215]:
              - button "Expand Row" [ref=e217] [cursor=pointer]:
                - img [ref=e218]
              - cell "avatar sds 111 morta 111 2222" [ref=e221]:
                - generic [ref=e222] [cursor=pointer]:
                  - img "avatar" [ref=e227]
                  - link "sds 111 morta 111 2222" [ref=e228]:
                    - /url: /patient/profile/7
                    - generic [ref=e230]:
                      - paragraph [ref=e232]: sds 111 morta 111
                      - generic [ref=e233]: "2222"
              - cell "A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9" [ref=e234]:
                - generic [ref=e236]:
                  - generic "Viral intestinal infection, unspecified" [ref=e237]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e238]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e239]: A49.8
                  - generic "Other viral enteritis" [ref=e240]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e241]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e242]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e243]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e244]: A49.8
                  - generic "Other viral enteritis" [ref=e245]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e246]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e247]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e248]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e249]: A49.8
                  - generic "Other viral enteritis" [ref=e250]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e251]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e252]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e253]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e254]: A49.8
                  - generic "Other viral enteritis" [ref=e255]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e256]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e257]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e258]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e259]: A49.8
                  - generic "Other viral enteritis" [ref=e260]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e261]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e262]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e263]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e264]: A49.8
                  - generic "Other viral enteritis" [ref=e265]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e266]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e267]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e268]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e269]: A49.8
                  - generic "Other viral enteritis" [ref=e270]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e271]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e272]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e273]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e274]: A49.8
                  - generic "Other viral enteritis" [ref=e275]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e276]: B16.0
                  - generic "Hepatitis A with hepatic coma" [ref=e277]: B15.0
                  - generic "Acute hepatitis B w/o delta-agent and without hepatic coma" [ref=e278]: B16.9
                  - generic "Bacterial infection, unspecified" [ref=e279]: A49.9
              - cell "10%" [ref=e280]:
                - generic [ref=e281]: 10%
              - cell "0" [ref=e282]:
                - generic [ref=e283]: "0"
              - cell "111 104" [ref=e284]:
                - generic [ref=e285]:
                  - generic [ref=e287]: "111"
                  - generic [ref=e289]:
                    - img [ref=e291]
                    - text: "104"
              - cell "No" [ref=e293]
              - cell "VERIFIED" [ref=e294]:
                - generic [ref=e295]:
                  - img [ref=e297]
                  - text: VERIFIED
              - cell "December 10, 2025 12:00 AM" [ref=e299]:
                - generic [ref=e300]: December 10, 2025 12:00 AM
              - cell "Diabetes" [ref=e301]:
                - generic [ref=e302]: Diabetes
              - cell [ref=e303]:
                - button [ref=e306] [cursor=pointer]:
                  - img [ref=e307]
            - row "Expand Row avatar Rihana Gates 908 A08.4 B16.0 D55.0 A09 0% 0 - No INVITED - HRT" [ref=e309]:
              - button "Expand Row" [ref=e311] [cursor=pointer]:
                - img [ref=e312]
              - cell "avatar Rihana Gates 908" [ref=e315]:
                - generic [ref=e316] [cursor=pointer]:
                  - img "avatar" [ref=e321]
                  - link "Rihana Gates 908" [ref=e322]:
                    - /url: /patient/profile/21
                    - generic [ref=e324]:
                      - paragraph [ref=e326]: Rihana Gates
                      - generic [ref=e327]: "908"
              - cell "A08.4 B16.0 D55.0 A09" [ref=e328]:
                - generic [ref=e330]:
                  - generic "Viral intestinal infection, unspecified" [ref=e331]: A08.4
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e332]: B16.0
                  - generic "Anemia due to glucose-6-phosphate dehydrogenase deficiency" [ref=e333]: D55.0
                  - generic "Infectious gastroenteritis and colitis, unspecified" [ref=e334]: A09
              - cell "0%" [ref=e335]:
                - generic [ref=e336]: 0%
              - cell "0" [ref=e337]:
                - generic [ref=e338]: "0"
              - cell "-" [ref=e339]
              - cell "No" [ref=e340]
              - cell "INVITED" [ref=e341]:
                - generic [ref=e342]:
                  - img [ref=e344]
                  - text: INVITED
              - cell "-" [ref=e346]:
                - generic [ref=e347]: "-"
              - cell "HRT" [ref=e348]:
                - generic [ref=e349]: HRT
              - cell [ref=e350]:
                - button [ref=e353] [cursor=pointer]:
                  - img [ref=e354]
            - row "Expand Row avatar Mojtaba Mojtahed 991 0% 0 - No INVITED - Diabetes" [ref=e356]:
              - button "Expand Row" [ref=e358] [cursor=pointer]:
                - img [ref=e359]
              - cell "avatar Mojtaba Mojtahed 991" [ref=e362]:
                - generic [ref=e363] [cursor=pointer]:
                  - img "avatar" [ref=e368]
                  - link "Mojtaba Mojtahed 991" [ref=e369]:
                    - /url: /patient/profile/33
                    - generic [ref=e371]:
                      - paragraph [ref=e373]: Mojtaba Mojtahed
                      - generic [ref=e374]: "991"
              - cell [ref=e375]
              - cell "0%" [ref=e376]:
                - generic [ref=e377]: 0%
              - cell "0" [ref=e378]:
                - generic [ref=e379]: "0"
              - cell "-" [ref=e380]
              - cell "No" [ref=e381]
              - cell "INVITED" [ref=e382]:
                - generic [ref=e383]:
                  - img [ref=e385]
                  - text: INVITED
              - cell "-" [ref=e387]:
                - generic [ref=e388]: "-"
              - cell "Diabetes" [ref=e389]:
                - generic [ref=e390]: Diabetes
              - cell [ref=e391]:
                - button [ref=e394] [cursor=pointer]:
                  - img [ref=e395]
            - row "Expand Row avatar Saman Salehi 0% 0 - No VERIFIED June 10, 2022 4:05 PM Diabetes" [ref=e397]:
              - button "Expand Row" [ref=e399] [cursor=pointer]:
                - img [ref=e400]
              - cell "avatar Saman Salehi" [ref=e403]:
                - generic [ref=e404] [cursor=pointer]:
                  - img "avatar" [ref=e409]
                  - link "Saman Salehi" [ref=e410]:
                    - /url: /patient/profile/41
                    - paragraph [ref=e414]: Saman Salehi
              - cell [ref=e415]
              - cell "0%" [ref=e416]:
                - generic [ref=e417]: 0%
              - cell "0" [ref=e418]:
                - generic [ref=e419]: "0"
              - cell "-" [ref=e420]
              - cell "No" [ref=e421]
              - cell "VERIFIED" [ref=e422]:
                - generic [ref=e423]:
                  - img [ref=e425]
                  - text: VERIFIED
              - cell "June 10, 2022 4:05 PM" [ref=e427]:
                - generic [ref=e428]: June 10, 2022 4:05 PM
              - cell "Diabetes" [ref=e429]:
                - generic [ref=e430]: Diabetes
              - cell [ref=e431]:
                - button [ref=e434] [cursor=pointer]:
                  - img [ref=e435]
            - row "Expand Row avatar Morgan A abc123pkt1 A08.8 0% 0 65 No PENDING - Diabetes" [ref=e437]:
              - button "Expand Row" [ref=e439] [cursor=pointer]:
                - img [ref=e440]
              - cell "avatar Morgan A abc123pkt1" [ref=e443]:
                - generic [ref=e444] [cursor=pointer]:
                  - img "avatar" [ref=e449]
                  - link "Morgan A abc123pkt1" [ref=e450]:
                    - /url: /patient/profile/46
                    - generic [ref=e452]:
                      - paragraph [ref=e454]: Morgan A
                      - generic [ref=e455]: abc123pkt1
              - cell "A08.8" [ref=e456]:
                - generic "Other specified intestinal infections" [ref=e459]: A08.8
              - cell "0%" [ref=e460]:
                - generic [ref=e461]: 0%
              - cell "0" [ref=e462]:
                - generic [ref=e463]: "0"
              - cell "65" [ref=e464]:
                - generic [ref=e467]: "65"
              - cell "No" [ref=e468]
              - cell "PENDING" [ref=e469]:
                - generic [ref=e470]:
                  - img [ref=e472]
                  - text: PENDING
              - cell "-" [ref=e474]:
                - generic [ref=e475]: "-"
              - cell "Diabetes" [ref=e476]:
                - generic [ref=e477]: Diabetes
              - cell [ref=e478]:
                - button [ref=e481] [cursor=pointer]:
                  - img [ref=e482]
            - row "Expand Row avatar Saman Salehi 990 0% 0 - No ACTIVATED - Diabetes" [ref=e484]:
              - button "Expand Row" [ref=e486] [cursor=pointer]:
                - img [ref=e487]
              - cell "avatar Saman Salehi 990" [ref=e490]:
                - generic [ref=e491] [cursor=pointer]:
                  - img "avatar" [ref=e496]
                  - link "Saman Salehi 990" [ref=e497]:
                    - /url: /patient/profile/52
                    - generic [ref=e499]:
                      - paragraph [ref=e501]: Saman Salehi
                      - generic [ref=e502]: "990"
              - cell [ref=e503]
              - cell "0%" [ref=e504]:
                - generic [ref=e505]: 0%
              - cell "0" [ref=e506]:
                - generic [ref=e507]: "0"
              - cell "-" [ref=e508]
              - cell "No" [ref=e509]
              - cell "ACTIVATED" [ref=e510]:
                - generic [ref=e511]:
                  - img [ref=e513]
                  - text: ACTIVATED
              - cell "-" [ref=e515]:
                - generic [ref=e516]: "-"
              - cell "Diabetes" [ref=e517]:
                - generic [ref=e518]: Diabetes
              - cell [ref=e519]:
                - button [ref=e522] [cursor=pointer]:
                  - img [ref=e523]
            - row "Expand Row avatar saman salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e525]:
              - button "Expand Row" [ref=e527] [cursor=pointer]:
                - img [ref=e528]
              - cell "avatar saman salehi" [ref=e531]:
                - generic [ref=e532] [cursor=pointer]:
                  - img "avatar" [ref=e537]
                  - link "saman salehi" [ref=e538]:
                    - /url: /patient/profile/53
                    - paragraph [ref=e542]: saman salehi
              - cell [ref=e543]
              - cell "0%" [ref=e544]:
                - generic [ref=e545]: 0%
              - cell "0" [ref=e546]:
                - generic [ref=e547]: "0"
              - cell "-" [ref=e548]
              - cell "No" [ref=e549]
              - cell "ACTIVATED" [ref=e550]:
                - generic [ref=e551]:
                  - img [ref=e553]
                  - text: ACTIVATED
              - cell "-" [ref=e555]:
                - generic [ref=e556]: "-"
              - cell "Diabetes" [ref=e557]:
                - generic [ref=e558]: Diabetes
              - cell [ref=e559]:
                - button [ref=e562] [cursor=pointer]:
                  - img [ref=e563]
            - row "Expand Row avatar 213 123wq qwqw 0% 0 - No VERIFIED June 14, 2022 5:08 PM Diabetes" [ref=e565]:
              - button "Expand Row" [ref=e567] [cursor=pointer]:
                - img [ref=e568]
              - cell "avatar 213 123wq qwqw" [ref=e571]:
                - generic [ref=e572] [cursor=pointer]:
                  - img "avatar" [ref=e577]
                  - link "213 123wq qwqw" [ref=e578]:
                    - /url: /patient/profile/54
                    - generic [ref=e580]:
                      - paragraph [ref=e582]: 213 123wq
                      - generic [ref=e583]: qwqw
              - cell [ref=e584]
              - cell "0%" [ref=e585]:
                - generic [ref=e586]: 0%
              - cell "0" [ref=e587]:
                - generic [ref=e588]: "0"
              - cell "-" [ref=e589]
              - cell "No" [ref=e590]
              - cell "VERIFIED" [ref=e591]:
                - generic [ref=e592]:
                  - img [ref=e594]
                  - text: VERIFIED
              - cell "June 14, 2022 5:08 PM" [ref=e596]:
                - generic [ref=e597]: June 14, 2022 5:08 PM
              - cell "Diabetes" [ref=e598]:
                - generic [ref=e599]: Diabetes
              - cell [ref=e600]:
                - button [ref=e603] [cursor=pointer]:
                  - img [ref=e604]
            - row "Expand Row avatar Saman Salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e606]:
              - button "Expand Row" [ref=e608] [cursor=pointer]:
                - img [ref=e609]
              - cell "avatar Saman Salehi" [ref=e612]:
                - generic [ref=e613] [cursor=pointer]:
                  - img "avatar" [ref=e618]
                  - link "Saman Salehi" [ref=e619]:
                    - /url: /patient/profile/55
                    - paragraph [ref=e623]: Saman Salehi
              - cell [ref=e624]
              - cell "0%" [ref=e625]:
                - generic [ref=e626]: 0%
              - cell "0" [ref=e627]:
                - generic [ref=e628]: "0"
              - cell "-" [ref=e629]
              - cell "No" [ref=e630]
              - cell "ACTIVATED" [ref=e631]:
                - generic [ref=e632]:
                  - img [ref=e634]
                  - text: ACTIVATED
              - cell "-" [ref=e636]:
                - generic [ref=e637]: "-"
              - cell "Diabetes" [ref=e638]:
                - generic [ref=e639]: Diabetes
              - cell [ref=e640]:
                - button [ref=e643] [cursor=pointer]:
                  - img [ref=e644]
            - row "Expand Row avatar sa qwe 122 0% 0 - No VERIFIED July 4, 2022 9:58 AM Diabetes" [ref=e646]:
              - button "Expand Row" [ref=e648] [cursor=pointer]:
                - img [ref=e649]
              - cell "avatar sa qwe 122" [ref=e652]:
                - generic [ref=e653] [cursor=pointer]:
                  - img "avatar" [ref=e658]
                  - link "sa qwe 122" [ref=e659]:
                    - /url: /patient/profile/56
                    - generic [ref=e661]:
                      - paragraph [ref=e663]: sa qwe
                      - generic [ref=e664]: "122"
              - cell [ref=e665]
              - cell "0%" [ref=e666]:
                - generic [ref=e667]: 0%
              - cell "0" [ref=e668]:
                - generic [ref=e669]: "0"
              - cell "-" [ref=e670]
              - cell "No" [ref=e671]
              - cell "VERIFIED" [ref=e672]:
                - generic [ref=e673]:
                  - img [ref=e675]
                  - text: VERIFIED
              - cell "July 4, 2022 9:58 AM" [ref=e677]:
                - generic [ref=e678]: July 4, 2022 9:58 AM
              - cell "Diabetes" [ref=e679]:
                - generic [ref=e680]: Diabetes
              - cell [ref=e681]:
                - button [ref=e684] [cursor=pointer]:
                  - img [ref=e685]
        - list [ref=e688]:
          - listitem:
            - img
          - listitem [ref=e689]: "1"
          - listitem [ref=e690]: "2"
          - listitem [ref=e691]: "3"
          - listitem [ref=e692]: "4"
          - listitem [ref=e693]: "5"
          - listitem [ref=e694]: …
          - listitem [ref=e695]: "790"
          - listitem [ref=e696]:
            - img [ref=e697]
      - generic [ref=e699]:
        - generic [ref=e700]:
          - paragraph [ref=e702]: Chat
          - button "delete" [ref=e703] [cursor=pointer]:
            - img [ref=e704]
        - generic [ref=e708]:
          - paragraph [ref=e709] [cursor=pointer]: Metabolic
          - paragraph [ref=e710] [cursor=pointer]: Zone
  - alert [ref=e711]
  - dialog "Filter" [active] [ref=e713]:
    - generic [ref=e714]:
      - generic [ref=e715]:
        - heading "Filter" [level=5] [ref=e717]
        - button "Close" [ref=e718] [cursor=pointer]
      - generic [ref=e719]:
        - generic [ref=e720]:
          - generic [ref=e721]:
            - generic [ref=e722]: Diagnosis
            - generic [ref=e723]:
              - log [ref=e725]
              - generic [ref=e726] [cursor=pointer]:
                - generic [ref=e727]:
                  - generic [ref=e728]: Type at least 2 letters to search
                  - combobox "Diagnosis" [ref=e730]
                - img [ref=e733]
          - generic [ref=e735]:
            - generic [ref=e737]:
              - generic [ref=e738]: Gender
              - generic [ref=e739]:
                - log [ref=e741]
                - generic [ref=e742] [cursor=pointer]:
                  - generic [ref=e743]:
                    - generic [ref=e744]: Select...
                    - combobox "Gender" [ref=e746]
                  - img [ref=e749]
            - generic [ref=e752]:
              - generic [ref=e753]: Language
              - generic [ref=e754]:
                - log [ref=e756]
                - generic [ref=e757] [cursor=pointer]:
                  - generic [ref=e758]:
                    - generic [ref=e759]: Select...
                    - combobox "Language" [ref=e761]
                  - img [ref=e764]
          - generic [ref=e766]:
            - generic [ref=e767]: Primary Staff
            - generic [ref=e768]:
              - log [ref=e770]
              - generic [ref=e771] [cursor=pointer]:
                - generic [ref=e772]:
                  - generic [ref=e773]: Select...
                  - combobox "Primary Staff" [ref=e775]
                - img [ref=e778]
          - generic [ref=e780]:
            - generic [ref=e781]: Program
            - generic [ref=e782]:
              - log [ref=e784]
              - generic [ref=e785] [cursor=pointer]:
                - generic [ref=e786]:
                  - generic [ref=e787]: Select...
                  - combobox "Program" [ref=e789]
                - img [ref=e792]
          - generic [ref=e794]:
            - generic [ref=e796]:
              - generic [ref=e797]: Age
              - generic [ref=e798]:
                - spinbutton "Age" [ref=e800]
                - spinbutton [ref=e802]
            - generic [ref=e804]:
              - generic [ref=e805]: Status
              - generic [ref=e806]:
                - log [ref=e808]
                - generic [ref=e809] [cursor=pointer]:
                  - generic [ref=e810]:
                    - generic [ref=e811]: Select...
                    - combobox "Status" [ref=e813]
                  - img [ref=e816]
          - generic [ref=e818]:
            - generic [ref=e819]: Last BCA Scan
            - generic [ref=e820]:
              - generic [ref=e822]:
                - generic: From
                - generic [ref=e824]:
                  - generic [ref=e825]:
                    - spinbutton [ref=e826]
                    - generic [ref=e827]: "-"
                    - spinbutton [ref=e828]
                    - generic [ref=e829]: "-"
                    - spinbutton [ref=e830]
                  - button [ref=e831] [cursor=pointer]:
                    - img [ref=e832]
                  - button [ref=e835] [cursor=pointer]:
                    - img [ref=e836]
              - generic [ref=e839]:
                - generic: To
                - generic [ref=e841]:
                  - generic [ref=e842]:
                    - spinbutton [ref=e843]
                    - generic [ref=e844]: "-"
                    - spinbutton [ref=e845]
                    - generic [ref=e846]: "-"
                    - spinbutton [ref=e847]
                  - button [ref=e848] [cursor=pointer]:
                    - img [ref=e849]
                  - button [ref=e852] [cursor=pointer]:
                    - img [ref=e853]
          - generic [ref=e855]:
            - generic [ref=e856]: Verification Date
            - generic [ref=e857]:
              - generic [ref=e859]:
                - generic: From
                - generic [ref=e861]:
                  - generic [ref=e862]:
                    - spinbutton [ref=e863]
                    - generic [ref=e864]: "-"
                    - spinbutton [ref=e865]
                    - generic [ref=e866]: "-"
                    - spinbutton [ref=e867]
                  - button [ref=e868] [cursor=pointer]:
                    - img [ref=e869]
                  - button [ref=e872] [cursor=pointer]:
                    - img [ref=e873]
              - generic [ref=e876]:
                - generic: To
                - generic [ref=e878]:
                  - generic [ref=e879]:
                    - spinbutton [ref=e880]
                    - generic [ref=e881]: "-"
                    - spinbutton [ref=e882]
                    - generic [ref=e883]: "-"
                    - spinbutton [ref=e884]
                  - button [ref=e885] [cursor=pointer]:
                    - img [ref=e886]
                  - button [ref=e889] [cursor=pointer]:
                    - img [ref=e890]
        - generic [ref=e892]:
          - generic [ref=e893]:
            - button "Apply Filters" [ref=e894] [cursor=pointer]:
              - generic [ref=e895]: Apply Filters
            - button "Save Filter Set" [ref=e896] [cursor=pointer]:
              - generic [ref=e897]: Save Filter Set
          - button "Cancel" [ref=e899] [cursor=pointer]:
            - generic [ref=e900]: Cancel
```

# Test source

```ts
  47  | });
  48  | 
  49  |   test('should display search bar and action buttons', async ({ page }) => {
  50  |     await expect(listingsPage.searchInput).toBeVisible();
  51  |     await expect(listingsPage.filterBtn).toBeVisible();
  52  |     await expect(listingsPage.addPatientBtn).toBeVisible();
  53  |     await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  54  |   });
  55  | 
  56  |   test('should display saved filters row', async ({ page }) => {
  57  |     await expect(listingsPage.savedFiltersRow).toBeVisible();
  58  |   });
  59  | 
  60  |   // ══════════════════════════════════════════════════════════
  61  |   // 2. SEARCH TESTS
  62  |   // ══════════════════════════════════════════════════════════
  63  | 
  64  |   test('should search patient by name and show results', async ({ page }) => {
  65  |     await listingsPage.searchPatient('Umer Mushtaq');
  66  | 
  67  |     // Search results should contain the searched name
  68  |     await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();
  69  | 
  70  |     // Clear Filter button should appear
  71  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  72  |   });
  73  | 
  74  |   test('should show rows after search', async ({ page }) => {
  75  |     await listingsPage.searchPatient('Umer Mushtaq');
  76  | 
  77  |     // At least one data row should be visible
  78  |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  79  |   });
  80  | 
  81  |   test('should clear search and restore full list', async ({ page }) => {
  82  |     // Search first
  83  |     await listingsPage.searchPatient('Umer Mushtaq');
  84  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  85  | 
  86  |     // Now clear
  87  |     await listingsPage.clearSearch();
  88  | 
  89  |     // Clear filter button should disappear
  90  |     await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  91  | 
  92  |     // Table rows should still be visible
  93  |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  94  |   });
  95  | 
  96  |   test('should show no results for non-existent patient', async ({ page }) => {
  97  |     await listingsPage.searchPatient('ZZZZNONEXISTENTPATIENT99999');
  98  | 
  99  |     // App removes the entire table (incl. header) when there are no results —
  100 |     // row count goes to 0, not 1. Assert no data rows exist in tbody.
  101 |     await expect(page.locator('table tbody tr')).toHaveCount(0, { timeout: 15000 });
  102 |   });
  103 | 
  104 |   test('should search is case-insensitive', async ({ page }) => {
  105 |     // Search uppercase
  106 |     await listingsPage.searchPatient('UMER MUSHTAQ');
  107 |     const upperRows = await page.getByRole('row').count();
  108 | 
  109 |     await listingsPage.clearSearch();
  110 |     await page.getByRole('row').nth(1).waitFor({ state: 'visible' });
  111 | 
  112 |     // Search lowercase
  113 |     await listingsPage.searchPatient('umer mushtaq');
  114 |     const lowerRows = await page.getByRole('row').count();
  115 | 
  116 |     expect(upperRows).toBe(lowerRows);
  117 |   });
  118 | 
  119 |   test('should show clear filter button only when search is active', async ({ page }) => {
  120 |     // No search — clear filter should not be visible
  121 |     await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  122 | 
  123 |     // After search — clear filter should appear
  124 |     await listingsPage.searchPatient('Umer');
  125 |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  126 |   });
  127 | 
  128 |   // ══════════════════════════════════════════════════════════
  129 |   // 3. FILTER MODAL TESTS
  130 |   // ══════════════════════════════════════════════════════════
  131 | 
  132 |   test('should open filter modal when clicking Filter button', async ({ page }) => {
  133 |     await listingsPage.openFilterModal();
  134 |     await expect(listingsPage.filterModal).toBeVisible();
  135 |   });
  136 | 
  137 |   test('should display all filter fields in modal', async ({ page }) => {
  138 |     await listingsPage.openFilterModal();
  139 | 
  140 |     // Scope to the dialog — these labels also exist in the background table
  141 |     const modal = page.getByRole('dialog');
  142 |     await expect(modal.getByText('Diagnosis')).toBeVisible();
  143 |     await expect(modal.getByText('Gender')).toBeVisible();
  144 |     await expect(modal.getByText('Language')).toBeVisible();
  145 |     await expect(modal.getByText('Primary Staff')).toBeVisible();
  146 |     await expect(modal.getByText('Program')).toBeVisible();
> 147 |     await expect(modal.getByText('Age')).toBeVisible();
      |                                          ^ Error: expect(locator).toBeVisible() failed
  148 |     await expect(modal.getByText('Status')).toBeVisible();
  149 |     await expect(modal.getByText('Last BCA Scan')).toBeVisible();
  150 |     await expect(modal.getByText('Verification Date')).toBeVisible();
  151 |   });
  152 | 
  153 |   test('should display Apply Filters, Save Filter Set and Cancel buttons', async ({ page }) => {
  154 |     await listingsPage.openFilterModal();
  155 | 
  156 |     await expect(listingsPage.applyFiltersBtn).toBeVisible();
  157 |     await expect(listingsPage.saveFilterSetBtn).toBeVisible();
  158 |     await expect(listingsPage.cancelFilterBtn).toBeVisible();
  159 |   });
  160 | 
  161 |   test('should close filter modal when clicking Cancel', async ({ page }) => {
  162 |     await listingsPage.openFilterModal();
  163 |     await expect(listingsPage.filterModal).toBeVisible();
  164 | 
  165 |     await listingsPage.closeFilterModal();
  166 |     await expect(listingsPage.filterModal).not.toBeVisible();
  167 |   });
  168 | 
  169 |   test('should apply filter and update patient list', async ({ page }) => {
  170 |     await listingsPage.openFilterModal();
  171 |     await listingsPage.applyFiltersBtn.click();
  172 | 
  173 |     // Clear Filter button appears once filter is applied
  174 |     await expect(listingsPage.clearFilterBtn).toBeVisible({ timeout: 10000 });
  175 |   });
  176 | 
  177 |   test('should clear all filters and restore full list', async ({ page }) => {
  178 |     await listingsPage.openFilterModal();
  179 |     await listingsPage.applyFiltersBtn.click();
  180 |     await expect(listingsPage.clearFilterBtn).toBeVisible({ timeout: 10000 });
  181 | 
  182 |     await listingsPage.clearAllFilters();
  183 | 
  184 |     // Table should still have rows
  185 |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  186 |   });
  187 | 
  188 |   // ══════════════════════════════════════════════════════════
  189 |   // 4. SAVED FILTER TESTS
  190 |   // ══════════════════════════════════════════════════════════
  191 | 
  192 |   test('should apply saved filter and update results', async ({ page }) => {
  193 |     await listingsPage.clickSavedFilter('Age 20-24');
  194 | 
  195 |     // Clear filter button should appear
  196 |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  197 |   });
  198 | 
  199 |   test('should show multiple saved filter chips', async ({ page }) => {
  200 |     await expect(page.getByText('Age 20-24')).toBeVisible();
  201 |     await expect(page.getByText('Male Filter')).toBeVisible();
  202 |   });
  203 | 
  204 |   // ══════════════════════════════════════════════════════════
  205 |   // 5. TABLE ROW TESTS
  206 |   // ══════════════════════════════════════════════════════════
  207 | 
  208 |   test('should expand patient row to show basic details', async ({ page }) => {
  209 |     // Click the Expand Row button on the first data row
  210 |     await page.getByRole('button', { name: /expand row/i }).first().click();
  211 | 
  212 |     // Expanded content row should appear
  213 |     await expect(page.getByRole('row').nth(2)).toBeVisible();
  214 |   });
  215 | 
  216 |   test('should show patient status badges', async ({ page }) => {
  217 |     const hasVerified  = await page.getByText('VERIFIED').first().isVisible().catch(() => false);
  218 |     const hasInvited   = await page.getByText('INVITED').first().isVisible().catch(() => false);
  219 |     const hasPending   = await page.getByText('PENDING').first().isVisible().catch(() => false);
  220 |     const hasActivated = await page.getByText('ACTIVATED').first().isVisible().catch(() => false);
  221 | 
  222 |     expect(hasVerified || hasInvited || hasPending || hasActivated).toBeTruthy();
  223 |   });
  224 | 
  225 |   test('should show three-dot menu button on each patient row', async ({ page }) => {
  226 |     // Last button in the first data row is the three-dot menu
  227 |     const menuBtn = page.getByRole('row').nth(1).getByRole('button').last();
  228 |     await expect(menuBtn).toBeVisible();
  229 |   });
  230 | 
  231 |   // ══════════════════════════════════════════════════════════
  232 |   // 6. ADD PATIENT BUTTON TESTS
  233 |   // ══════════════════════════════════════════════════════════
  234 | 
  235 |   test('should show Add Patient button', async ({ page }) => {
  236 |     await expect(listingsPage.addPatientBtn).toBeVisible();
  237 |     await expect(listingsPage.addPatientBtn).toBeEnabled();
  238 |   });
  239 | 
  240 |   test('should show Add Patient (MRN) button', async ({ page }) => {
  241 |     await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  242 |     await expect(listingsPage.addPatientMRNBtn).toBeEnabled();
  243 |   });
  244 | 
  245 |   test('should open add patient form when clicking Add Patient', async ({ page }) => {
  246 |     await listingsPage.clickAddPatient();
  247 |     await page.waitForLoadState('domcontentloaded');
```