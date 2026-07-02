# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> copy secure link button is visible
- Location: tests\e2e\consent-intake.spec.js:86:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /^umer mushtaq/i }).first() to be visible

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
        - generic [ref=e44]: (7906)
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
              - textbox "Search" [active] [ref=e67]: umer mushtaq
            - button "Filter" [ref=e69] [cursor=pointer]:
              - generic [ref=e70]:
                - img [ref=e72]
                - text: Filter
            - button "Clear Filter" [ref=e74] [cursor=pointer]:
              - generic [ref=e75]:
                - img [ref=e77]
                - text: Clear Filter
          - generic [ref=e79]:
            - button [ref=e81] [cursor=pointer]:
              - img [ref=e83]
            - button "Add Patient" [ref=e86] [cursor=pointer]:
              - generic [ref=e87]:
                - img [ref=e89]
                - text: Add Patient
            - button "Add Patient (MRN)" [ref=e92] [cursor=pointer]:
              - generic [ref=e93]:
                - img [ref=e95]
                - text: Add Patient (MRN)
        - generic [ref=e97]:
          - generic [ref=e98]: "Saved Filters:"
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic [ref=e102] [cursor=pointer]: Male | English | Weight Loss
              - button [ref=e104] [cursor=pointer]:
                - img [ref=e106]
            - generic [ref=e109]:
              - generic [ref=e110] [cursor=pointer]: Age 20-24
              - button [ref=e112] [cursor=pointer]:
                - img [ref=e114]
            - generic [ref=e117]:
              - generic [ref=e118] [cursor=pointer]: Verified Users | BCA Scan from July
              - button [ref=e120] [cursor=pointer]:
                - img [ref=e122]
            - generic [ref=e125]:
              - generic [ref=e126] [cursor=pointer]: Primary Staff | Male
              - button [ref=e128] [cursor=pointer]:
                - img [ref=e130]
            - generic [ref=e133]:
              - generic [ref=e134] [cursor=pointer]: test waleed updated
              - button [ref=e136] [cursor=pointer]:
                - img [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e142] [cursor=pointer]: new moiz test
              - button [ref=e144] [cursor=pointer]:
                - img [ref=e146]
            - generic [ref=e149]:
              - generic [ref=e150] [cursor=pointer]: Umer's Test filter
              - button [ref=e152] [cursor=pointer]:
                - img [ref=e154]
            - generic [ref=e157]:
              - generic [ref=e158] [cursor=pointer]: Test - Diagnoses - Hassam
              - button [ref=e160] [cursor=pointer]:
                - img [ref=e162]
            - generic [ref=e165]:
              - generic [ref=e166] [cursor=pointer]: Male Filter
              - button [ref=e168] [cursor=pointer]:
                - img [ref=e170]
            - generic [ref=e173]:
              - generic [ref=e174] [cursor=pointer]: Male Users
              - button [ref=e176] [cursor=pointer]:
                - img [ref=e178]
            - generic [ref=e181]:
              - generic [ref=e182] [cursor=pointer]: Male Users
              - button [ref=e184] [cursor=pointer]:
                - img [ref=e186]
            - generic [ref=e189]:
              - generic [ref=e190] [cursor=pointer]: Male Users
              - button [ref=e192] [cursor=pointer]:
                - img [ref=e194]
            - generic [ref=e197]:
              - generic [ref=e198] [cursor=pointer]: Male Users
              - button [ref=e200] [cursor=pointer]:
                - img [ref=e202]
            - generic [ref=e205]:
              - generic [ref=e206] [cursor=pointer]: Male Users Test
              - button [ref=e208] [cursor=pointer]:
                - img [ref=e210]
            - generic [ref=e213]:
              - generic [ref=e214] [cursor=pointer]: Male Users Test
              - button [ref=e216] [cursor=pointer]:
                - img [ref=e218]
            - generic [ref=e221]:
              - generic [ref=e222] [cursor=pointer]: Male Users Test
              - button [ref=e224] [cursor=pointer]:
                - img [ref=e226]
            - generic [ref=e229]:
              - generic [ref=e230] [cursor=pointer]: Male Users Test
              - button [ref=e232] [cursor=pointer]:
                - img [ref=e234]
            - generic [ref=e237]:
              - generic [ref=e238] [cursor=pointer]: Male Users Test
              - button [ref=e240] [cursor=pointer]:
                - img [ref=e242]
            - generic [ref=e245]:
              - generic [ref=e246] [cursor=pointer]: Male Users Test 1781906559867
              - button [ref=e248] [cursor=pointer]:
                - img [ref=e250]
      - generic [ref=e254]:
        - table [ref=e258]:
          - rowgroup [ref=e259]:
            - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Verification Date ▲ Patient Program ▲" [ref=e260]:
              - columnheader "Patient ▲" [ref=e263] [cursor=pointer]:
                - generic [ref=e264]: Patient
                - generic [ref=e265]: ▲
              - columnheader "Diagnosis ▲" [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: Diagnosis
                - generic [ref=e269]: ▲
              - columnheader "TIR ▲" [ref=e271] [cursor=pointer]:
                - generic [ref=e272]: TIR
                - generic [ref=e273]: ▲
              - columnheader "Food Log ▲" [ref=e275] [cursor=pointer]:
                - generic [ref=e276]: Food Log
                - generic [ref=e277]: ▲
              - columnheader "Weight ▲" [ref=e279] [cursor=pointer]:
                - generic [ref=e280]: Weight
                - generic [ref=e281]: ▲
              - columnheader "Active Chats ▲" [ref=e283] [cursor=pointer]:
                - generic [ref=e284]: Active Chats
                - generic [ref=e285]: ▲
              - columnheader "Status ▲" [ref=e287] [cursor=pointer]:
                - generic [ref=e288]: Status
                - generic [ref=e289]: ▲
              - columnheader "Verification Date ▲" [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: Verification Date
                - generic [ref=e293]: ▲
              - columnheader "Patient Program ▲" [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: Patient Program
                - generic [ref=e297]: ▲
          - rowgroup [ref=e299]:
            - row "Expand Row avatar sds 111 morta 111 2222 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9 10% 0 111 104 No VERIFIED December 10, 2025 12:00 AM Diabetes" [ref=e300]:
              - button "Expand Row" [ref=e302] [cursor=pointer]:
                - img [ref=e303]
              - cell "avatar sds 111 morta 111 2222" [ref=e306]:
                - generic [ref=e307] [cursor=pointer]:
                  - img "avatar" [ref=e312]
                  - link "sds 111 morta 111 2222" [ref=e313]:
                    - /url: /patient/profile/7
                    - generic [ref=e315]:
                      - paragraph [ref=e317]: sds 111 morta 111
                      - generic [ref=e318]: "2222"
              - cell "A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9" [ref=e319]:
                - generic [ref=e321]:
                  - generic "Viral intestinal infection, unspecified" [ref=e322]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e323]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e324]: A49.8
                  - generic "Other viral enteritis" [ref=e325]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e326]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e327]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e328]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e329]: A49.8
                  - generic "Other viral enteritis" [ref=e330]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e331]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e332]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e333]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e334]: A49.8
                  - generic "Other viral enteritis" [ref=e335]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e336]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e337]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e338]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e339]: A49.8
                  - generic "Other viral enteritis" [ref=e340]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e341]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e342]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e343]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e344]: A49.8
                  - generic "Other viral enteritis" [ref=e345]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e346]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e347]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e348]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e349]: A49.8
                  - generic "Other viral enteritis" [ref=e350]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e351]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e352]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e353]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e354]: A49.8
                  - generic "Other viral enteritis" [ref=e355]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e356]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e357]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e358]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e359]: A49.8
                  - generic "Other viral enteritis" [ref=e360]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e361]: B16.0
                  - generic "Hepatitis A with hepatic coma" [ref=e362]: B15.0
                  - generic "Acute hepatitis B w/o delta-agent and without hepatic coma" [ref=e363]: B16.9
                  - generic "Bacterial infection, unspecified" [ref=e364]: A49.9
              - cell "10%" [ref=e365]:
                - generic [ref=e366]: 10%
              - cell "0" [ref=e367]:
                - generic [ref=e368]: "0"
              - cell "111 104" [ref=e369]:
                - generic [ref=e370]:
                  - generic [ref=e372]: "111"
                  - generic [ref=e374]:
                    - img [ref=e376]
                    - text: "104"
              - cell "No" [ref=e378]
              - cell "VERIFIED" [ref=e379]:
                - generic [ref=e380]:
                  - img [ref=e382]
                  - text: VERIFIED
              - cell "December 10, 2025 12:00 AM" [ref=e384]:
                - generic [ref=e385]: December 10, 2025 12:00 AM
              - cell "Diabetes" [ref=e386]:
                - generic [ref=e387]: Diabetes
              - cell [ref=e388]:
                - button [ref=e391] [cursor=pointer]:
                  - img [ref=e392]
            - row "Expand Row avatar Rihana Gates 908 A08.4 B16.0 D55.0 A09 0% 0 - No INVITED - HRT" [ref=e394]:
              - button "Expand Row" [ref=e396] [cursor=pointer]:
                - img [ref=e397]
              - cell "avatar Rihana Gates 908" [ref=e400]:
                - generic [ref=e401] [cursor=pointer]:
                  - img "avatar" [ref=e406]
                  - link "Rihana Gates 908" [ref=e407]:
                    - /url: /patient/profile/21
                    - generic [ref=e409]:
                      - paragraph [ref=e411]: Rihana Gates
                      - generic [ref=e412]: "908"
              - cell "A08.4 B16.0 D55.0 A09" [ref=e413]:
                - generic [ref=e415]:
                  - generic "Viral intestinal infection, unspecified" [ref=e416]: A08.4
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e417]: B16.0
                  - generic "Anemia due to glucose-6-phosphate dehydrogenase deficiency" [ref=e418]: D55.0
                  - generic "Infectious gastroenteritis and colitis, unspecified" [ref=e419]: A09
              - cell "0%" [ref=e420]:
                - generic [ref=e421]: 0%
              - cell "0" [ref=e422]:
                - generic [ref=e423]: "0"
              - cell "-" [ref=e424]
              - cell "No" [ref=e425]
              - cell "INVITED" [ref=e426]:
                - generic [ref=e427]:
                  - img [ref=e429]
                  - text: INVITED
              - cell "-" [ref=e431]:
                - generic [ref=e432]: "-"
              - cell "HRT" [ref=e433]:
                - generic [ref=e434]: HRT
              - cell [ref=e435]:
                - button [ref=e438] [cursor=pointer]:
                  - img [ref=e439]
            - row "Expand Row avatar Mojtaba Mojtahed 991 0% 0 - No INVITED - Diabetes" [ref=e441]:
              - button "Expand Row" [ref=e443] [cursor=pointer]:
                - img [ref=e444]
              - cell "avatar Mojtaba Mojtahed 991" [ref=e447]:
                - generic [ref=e448] [cursor=pointer]:
                  - img "avatar" [ref=e453]
                  - link "Mojtaba Mojtahed 991" [ref=e454]:
                    - /url: /patient/profile/33
                    - generic [ref=e456]:
                      - paragraph [ref=e458]: Mojtaba Mojtahed
                      - generic [ref=e459]: "991"
              - cell [ref=e460]
              - cell "0%" [ref=e461]:
                - generic [ref=e462]: 0%
              - cell "0" [ref=e463]:
                - generic [ref=e464]: "0"
              - cell "-" [ref=e465]
              - cell "No" [ref=e466]
              - cell "INVITED" [ref=e467]:
                - generic [ref=e468]:
                  - img [ref=e470]
                  - text: INVITED
              - cell "-" [ref=e472]:
                - generic [ref=e473]: "-"
              - cell "Diabetes" [ref=e474]:
                - generic [ref=e475]: Diabetes
              - cell [ref=e476]:
                - button [ref=e479] [cursor=pointer]:
                  - img [ref=e480]
            - row "Expand Row avatar Saman Salehi 0% 0 - No VERIFIED June 10, 2022 4:05 PM Diabetes" [ref=e482]:
              - button "Expand Row" [ref=e484] [cursor=pointer]:
                - img [ref=e485]
              - cell "avatar Saman Salehi" [ref=e488]:
                - generic [ref=e489] [cursor=pointer]:
                  - img "avatar" [ref=e494]
                  - link "Saman Salehi" [ref=e495]:
                    - /url: /patient/profile/41
                    - paragraph [ref=e499]: Saman Salehi
              - cell [ref=e500]
              - cell "0%" [ref=e501]:
                - generic [ref=e502]: 0%
              - cell "0" [ref=e503]:
                - generic [ref=e504]: "0"
              - cell "-" [ref=e505]
              - cell "No" [ref=e506]
              - cell "VERIFIED" [ref=e507]:
                - generic [ref=e508]:
                  - img [ref=e510]
                  - text: VERIFIED
              - cell "June 10, 2022 4:05 PM" [ref=e512]:
                - generic [ref=e513]: June 10, 2022 4:05 PM
              - cell "Diabetes" [ref=e514]:
                - generic [ref=e515]: Diabetes
              - cell [ref=e516]:
                - button [ref=e519] [cursor=pointer]:
                  - img [ref=e520]
            - row "Expand Row avatar Morgan A abc123pkt1 A08.8 0% 0 65 No PENDING - Diabetes" [ref=e522]:
              - button "Expand Row" [ref=e524] [cursor=pointer]:
                - img [ref=e525]
              - cell "avatar Morgan A abc123pkt1" [ref=e528]:
                - generic [ref=e529] [cursor=pointer]:
                  - img "avatar" [ref=e534]
                  - link "Morgan A abc123pkt1" [ref=e535]:
                    - /url: /patient/profile/46
                    - generic [ref=e537]:
                      - paragraph [ref=e539]: Morgan A
                      - generic [ref=e540]: abc123pkt1
              - cell "A08.8" [ref=e541]:
                - generic "Other specified intestinal infections" [ref=e544]: A08.8
              - cell "0%" [ref=e545]:
                - generic [ref=e546]: 0%
              - cell "0" [ref=e547]:
                - generic [ref=e548]: "0"
              - cell "65" [ref=e549]:
                - generic [ref=e552]: "65"
              - cell "No" [ref=e553]
              - cell "PENDING" [ref=e554]:
                - generic [ref=e555]:
                  - img [ref=e557]
                  - text: PENDING
              - cell "-" [ref=e559]:
                - generic [ref=e560]: "-"
              - cell "Diabetes" [ref=e561]:
                - generic [ref=e562]: Diabetes
              - cell [ref=e563]:
                - button [ref=e566] [cursor=pointer]:
                  - img [ref=e567]
            - row "Expand Row avatar Saman Salehi 990 0% 0 - No ACTIVATED - Diabetes" [ref=e569]:
              - button "Expand Row" [ref=e571] [cursor=pointer]:
                - img [ref=e572]
              - cell "avatar Saman Salehi 990" [ref=e575]:
                - generic [ref=e576] [cursor=pointer]:
                  - img "avatar" [ref=e581]
                  - link "Saman Salehi 990" [ref=e582]:
                    - /url: /patient/profile/52
                    - generic [ref=e584]:
                      - paragraph [ref=e586]: Saman Salehi
                      - generic [ref=e587]: "990"
              - cell [ref=e588]
              - cell "0%" [ref=e589]:
                - generic [ref=e590]: 0%
              - cell "0" [ref=e591]:
                - generic [ref=e592]: "0"
              - cell "-" [ref=e593]
              - cell "No" [ref=e594]
              - cell "ACTIVATED" [ref=e595]:
                - generic [ref=e596]:
                  - img [ref=e598]
                  - text: ACTIVATED
              - cell "-" [ref=e600]:
                - generic [ref=e601]: "-"
              - cell "Diabetes" [ref=e602]:
                - generic [ref=e603]: Diabetes
              - cell [ref=e604]:
                - button [ref=e607] [cursor=pointer]:
                  - img [ref=e608]
            - row "Expand Row avatar saman salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e610]:
              - button "Expand Row" [ref=e612] [cursor=pointer]:
                - img [ref=e613]
              - cell "avatar saman salehi" [ref=e616]:
                - generic [ref=e617] [cursor=pointer]:
                  - img "avatar" [ref=e622]
                  - link "saman salehi" [ref=e623]:
                    - /url: /patient/profile/53
                    - paragraph [ref=e627]: saman salehi
              - cell [ref=e628]
              - cell "0%" [ref=e629]:
                - generic [ref=e630]: 0%
              - cell "0" [ref=e631]:
                - generic [ref=e632]: "0"
              - cell "-" [ref=e633]
              - cell "No" [ref=e634]
              - cell "ACTIVATED" [ref=e635]:
                - generic [ref=e636]:
                  - img [ref=e638]
                  - text: ACTIVATED
              - cell "-" [ref=e640]:
                - generic [ref=e641]: "-"
              - cell "Diabetes" [ref=e642]:
                - generic [ref=e643]: Diabetes
              - cell [ref=e644]:
                - button [ref=e647] [cursor=pointer]:
                  - img [ref=e648]
            - row "Expand Row avatar 213 123wq qwqw 0% 0 - No VERIFIED June 14, 2022 5:08 PM Diabetes" [ref=e650]:
              - button "Expand Row" [ref=e652] [cursor=pointer]:
                - img [ref=e653]
              - cell "avatar 213 123wq qwqw" [ref=e656]:
                - generic [ref=e657] [cursor=pointer]:
                  - img "avatar" [ref=e662]
                  - link "213 123wq qwqw" [ref=e663]:
                    - /url: /patient/profile/54
                    - generic [ref=e665]:
                      - paragraph [ref=e667]: 213 123wq
                      - generic [ref=e668]: qwqw
              - cell [ref=e669]
              - cell "0%" [ref=e670]:
                - generic [ref=e671]: 0%
              - cell "0" [ref=e672]:
                - generic [ref=e673]: "0"
              - cell "-" [ref=e674]
              - cell "No" [ref=e675]
              - cell "VERIFIED" [ref=e676]:
                - generic [ref=e677]:
                  - img [ref=e679]
                  - text: VERIFIED
              - cell "June 14, 2022 5:08 PM" [ref=e681]:
                - generic [ref=e682]: June 14, 2022 5:08 PM
              - cell "Diabetes" [ref=e683]:
                - generic [ref=e684]: Diabetes
              - cell [ref=e685]:
                - button [ref=e688] [cursor=pointer]:
                  - img [ref=e689]
            - row "Expand Row avatar Saman Salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e691]:
              - button "Expand Row" [ref=e693] [cursor=pointer]:
                - img [ref=e694]
              - cell "avatar Saman Salehi" [ref=e697]:
                - generic [ref=e698] [cursor=pointer]:
                  - img "avatar" [ref=e703]
                  - link "Saman Salehi" [ref=e704]:
                    - /url: /patient/profile/55
                    - paragraph [ref=e708]: Saman Salehi
              - cell [ref=e709]
              - cell "0%" [ref=e710]:
                - generic [ref=e711]: 0%
              - cell "0" [ref=e712]:
                - generic [ref=e713]: "0"
              - cell "-" [ref=e714]
              - cell "No" [ref=e715]
              - cell "ACTIVATED" [ref=e716]:
                - generic [ref=e717]:
                  - img [ref=e719]
                  - text: ACTIVATED
              - cell "-" [ref=e721]:
                - generic [ref=e722]: "-"
              - cell "Diabetes" [ref=e723]:
                - generic [ref=e724]: Diabetes
              - cell [ref=e725]:
                - button [ref=e728] [cursor=pointer]:
                  - img [ref=e729]
            - row "Expand Row avatar sa qwe 122 0% 0 - No VERIFIED July 4, 2022 9:58 AM Diabetes" [ref=e731]:
              - button "Expand Row" [ref=e733] [cursor=pointer]:
                - img [ref=e734]
              - cell "avatar sa qwe 122" [ref=e737]:
                - generic [ref=e738] [cursor=pointer]:
                  - img "avatar" [ref=e743]
                  - link "sa qwe 122" [ref=e744]:
                    - /url: /patient/profile/56
                    - generic [ref=e746]:
                      - paragraph [ref=e748]: sa qwe
                      - generic [ref=e749]: "122"
              - cell [ref=e750]
              - cell "0%" [ref=e751]:
                - generic [ref=e752]: 0%
              - cell "0" [ref=e753]:
                - generic [ref=e754]: "0"
              - cell "-" [ref=e755]
              - cell "No" [ref=e756]
              - cell "VERIFIED" [ref=e757]:
                - generic [ref=e758]:
                  - img [ref=e760]
                  - text: VERIFIED
              - cell "July 4, 2022 9:58 AM" [ref=e762]:
                - generic [ref=e763]: July 4, 2022 9:58 AM
              - cell "Diabetes" [ref=e764]:
                - generic [ref=e765]: Diabetes
              - cell [ref=e766]:
                - button [ref=e769] [cursor=pointer]:
                  - img [ref=e770]
        - list [ref=e773]:
          - listitem:
            - img
          - listitem [ref=e774]: "1"
          - listitem [ref=e775]: "2"
          - listitem [ref=e776]: "3"
          - listitem [ref=e777]: "4"
          - listitem [ref=e778]: "5"
          - listitem [ref=e779]: …
          - listitem [ref=e780]: "791"
          - listitem [ref=e781]:
            - img [ref=e782]
      - generic [ref=e784]:
        - generic [ref=e785]:
          - paragraph [ref=e787]: Chat
          - button "delete" [ref=e788] [cursor=pointer]:
            - img [ref=e789]
        - generic [ref=e793]:
          - paragraph [ref=e794] [cursor=pointer]: Metabolic
          - paragraph [ref=e795] [cursor=pointer]: Zone
  - alert [ref=e796]
```

# Test source

```ts
  1   | class ConsentIntakePage {
  2   | 
  3   |   constructor(page) {
  4   |     this.page = page;
  5   | 
  6   |     // ── Navigation ──────────────────────────────────────────────
  7   |     this.consentIntakeTab = page.getByRole('link', { name: 'Consent & Intake' });
  8   | 
  9   |     // ── Visit date picker ─────────────────────────────────────────
  10  |     this.visitDateBtn = page.locator('#consent-visit-date-trigger');
  11  |     this.nextMonthBtn = page.getByRole('button', { name: 'Go to next month' });
  12  | 
  13  |     // ── Episode number ────────────────────────────────────────────
  14  |     this.episodeNumberInput = page.locator('#episode-number');
  15  |     this.saveBtn            = page.getByRole('button', { name: 'Save' });
  16  | 
  17  |     // ── Minor patient banner ──────────────────────────────────────
  18  |     // Appears after save when patient is under 18 — blocks Patient Type/Visit Type
  19  |     // until guardian is added
  20  |     this.minorBanner = page.locator('text=This patient is a minor');
  21  | 
  22  |     // ── Patient type & visit type ─────────────────────────────────
  23  |     // Only renders after: episode saved AND (adult patient OR guardian added for minor)
  24  |     this.patientTypeCombo = page.locator('#patient-type-combobox');
  25  |     this.visitTypeCombo   = page.locator('#visit-type-combobox');
  26  | 
  27  |     // ── Quick Assign ─────────────────────────────────────────────
  28  |     this.quickAssignBtn = page.getByRole('button', { name: 'Quick Assign' });
  29  | 
  30  |     // Add Doctor dialog
  31  |     this.addDoctorBtn        = page.getByRole('button', { name: 'Add Doctor' });
  32  |     this.selectStaffDropdown = page.getByRole('button', { name: 'Select staff…' });
  33  |     this.dialogAddDoctorBtn  = page.getByRole('dialog').getByRole('button', { name: 'Add Doctor' });
  34  | 
  35  |     // Add Witness dialog
  36  |     this.addWitnessBtn       = page.getByRole('button', { name: 'Add Witness' });
  37  |     this.dialogAddWitnessBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Witness' });
  38  | 
  39  |     // ── Parent/Guardian ──────────────────────────────────────────
  40  |     this.editParentGuardianBtn       = page.getByRole('button', { name: 'Edit parent/guardian co-signer' });
  41  |     this.parentGuardianFullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  42  |     this.updateParentGuardianBtn     = page.getByRole('button', { name: 'Update Parent/Guardian' });
  43  | 
  44  |     // ── Interpreter ──────────────────────────────────────────────
  45  |     this.editInterpreterBtn   = page.getByRole('button', { name: 'Edit interpreter' });
  46  |     this.interpreterNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  47  |     this.languageInput        = page.getByRole('textbox', { name: 'Language' });
  48  |     this.updateInterpreterBtn = page.getByRole('button', { name: 'Update Interpreter' });
  49  | 
  50  |     // ── Secure link ──────────────────────────────────────────────
  51  |     this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
  52  |   }
  53  | 
  54  |   // ── Open patient and go to Consent & Intake tab ──────────────
  55  |   async openPatientConsentTab(patientName) {
  56  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
  57  |     await this.page.getByRole('heading', { name: 'Patients', exact: true })
  58  |       .waitFor({ state: 'visible', timeout: 15000 });
  59  | 
  60  |     const search = this.page.getByRole('textbox', { name: 'Search' });
  61  |     await search.click();
  62  |     await search.fill(patientName);
  63  |     await search.press('Enter');
  64  | 
  65  |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
> 66  |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
      |                       ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  67  |     await patientLink.click();
  68  | 
  69  |     await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
  70  |     await this.consentIntakeTab.click();
  71  | 
  72  |     await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  73  |   }
  74  | 
  75  |   // ── Set visit date to a specific absolute future date ─────────
  76  |   async setVisitDate(targetYear, targetMonth, targetDay) {
  77  |     await this.visitDateBtn.click();
  78  |     await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });
  79  | 
  80  |     const now = new Date();
  81  |     const monthsToClick = (targetYear - now.getFullYear()) * 12 + (targetMonth - (now.getMonth() + 1));
  82  | 
  83  |     for (let i = 0; i < monthsToClick; i++) {
  84  |       await this.nextMonthBtn.click();
  85  |       await this.page.waitForTimeout(150);
  86  |     }
  87  | 
  88  |     await this.page
  89  |       .locator(`button[name='day'].rdp-day`)
  90  |       .filter({ hasText: new RegExp(`^${targetDay}$`) })
  91  |       .click();
  92  |   }
  93  | 
  94  |   // ── Set unique episode number, retry once on duplicate error ──
  95  |   async setEpisodeNumber(episodeNumber) {
  96  |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  97  |     await this.episodeNumberInput.dblclick();
  98  |     await this.episodeNumberInput.fill(String(episodeNumber));
  99  |     await this.saveBtn.click();
  100 | 
  101 |     // Retry once if duplicate episode error appears
  102 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  103 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  104 |     if (hasError) {
  105 |       const retryNumber = Date.now().toString().slice(-8);
  106 |       await this.episodeNumberInput.dblclick();
  107 |       await this.episodeNumberInput.fill(retryNumber);
  108 |       await this.saveBtn.click();
  109 |     }
  110 | 
  111 |     // After save, two outcomes:
  112 |     //   Adult patient  → Patient Type combobox appears immediately
  113 |     //   Minor patient  → minor banner appears; guardian must be added first
  114 |     // We wait for either — caller decides what to do next via isMinorPatient()
  115 |     await Promise.race([
  116 |       this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
  117 |       this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
  118 |     ]);
  119 |   }
  120 | 
  121 |   // ── Returns true if the minor guardian banner is currently shown ──
  122 |   async isMinorPatient() {
  123 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  124 |   }
  125 | 
  126 |   // ── Full setup: date + episode + auto-handle minor guardian ──
  127 |   // Use this in tests so they work regardless of patient age.
  128 |   // guardianName is used only when patient is a minor.
  129 |   async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
  130 |     await this.setVisitDate(targetYear, targetMonth, targetDay);
  131 |     await this.setEpisodeNumber(episodeNumber);
  132 | 
  133 |     if (await this.isMinorPatient()) {
  134 |       // Guardian is required before the form can proceed
  135 |       await this.editParentGuardian(guardianName);
  136 |       // Wait for Patient Type to appear now that guardian is satisfied
  137 |       await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  138 |     }
  139 |   }
  140 | 
  141 |   // ── Select patient type ──────────────────────────────────────
  142 |   // Popover: id="patient-type-popover", options are plain <button> elements
  143 |   async selectPatientType(typeName) {
  144 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  145 |     await this.patientTypeCombo.click();
  146 |     // Wait for popover to open, then click option by exact text
  147 |     await this.page
  148 |       .locator('#patient-type-popover button')
  149 |       .filter({ hasText: new RegExp(`^${typeName}$`) })
  150 |       .click();
  151 |     // After selection, Quick Assign and Visit Type should appear
  152 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  153 |   }
  154 | 
  155 |   // ── Select visit type ────────────────────────────────────────
  156 |   // Popover: id="visit-type-popover", options are plain <button> elements
  157 |   async selectVisitType(typeName) {
  158 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  159 |     await this.visitTypeCombo.click();
  160 |     await this.page
  161 |       .locator('#visit-type-popover button')
  162 |       .filter({ hasText: new RegExp(`^${typeName}$`) })
  163 |       .click();
  164 |     // After both selections, forms get assigned — wait for Quick Assign to confirm
  165 |     await this.quickAssignBtn.waitFor({ state: 'visible', timeout: 15000 });
  166 |   }
```