# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupon.spec.js >> Add Coupon >> redeeming an already-redeemed coupon shows error
- Location: tests\e2e\coupon.spec.js:73:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /umer mushtaq 8765/i }).first()

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
              - textbox "Search" [active] [ref=e67]
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
            - generic [ref=e168]:
              - generic [ref=e169] [cursor=pointer]: Male Users
              - button [ref=e171] [cursor=pointer]:
                - img [ref=e173]
            - generic [ref=e176]:
              - generic [ref=e177] [cursor=pointer]: Male Users
              - button [ref=e179] [cursor=pointer]:
                - img [ref=e181]
            - generic [ref=e184]:
              - generic [ref=e185] [cursor=pointer]: Male Users
              - button [ref=e187] [cursor=pointer]:
                - img [ref=e189]
            - generic [ref=e192]:
              - generic [ref=e193] [cursor=pointer]: Male Users
              - button [ref=e195] [cursor=pointer]:
                - img [ref=e197]
            - generic [ref=e200]:
              - generic [ref=e201] [cursor=pointer]: Male Users Test
              - button [ref=e203] [cursor=pointer]:
                - img [ref=e205]
            - generic [ref=e208]:
              - generic [ref=e209] [cursor=pointer]: Male Users Test
              - button [ref=e211] [cursor=pointer]:
                - img [ref=e213]
            - generic [ref=e216]:
              - generic [ref=e217] [cursor=pointer]: Male Users Test
              - button [ref=e219] [cursor=pointer]:
                - img [ref=e221]
            - generic [ref=e224]:
              - generic [ref=e225] [cursor=pointer]: Male Users Test
              - button [ref=e227] [cursor=pointer]:
                - img [ref=e229]
            - generic [ref=e232]:
              - generic [ref=e233] [cursor=pointer]: Male Users Test
              - button [ref=e235] [cursor=pointer]:
                - img [ref=e237]
            - generic [ref=e240]:
              - generic [ref=e241] [cursor=pointer]: Male Users Test 1781906559867
              - button [ref=e243] [cursor=pointer]:
                - img [ref=e245]
      - generic [ref=e249]:
        - table [ref=e253]:
          - rowgroup [ref=e254]:
            - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Verification Date ▲ Patient Program ▲" [ref=e255]:
              - columnheader "Patient ▲" [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: Patient
                - generic [ref=e260]: ▲
              - columnheader "Diagnosis ▲" [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: Diagnosis
                - generic [ref=e264]: ▲
              - columnheader "TIR ▲" [ref=e266] [cursor=pointer]:
                - generic [ref=e267]: TIR
                - generic [ref=e268]: ▲
              - columnheader "Food Log ▲" [ref=e270] [cursor=pointer]:
                - generic [ref=e271]: Food Log
                - generic [ref=e272]: ▲
              - columnheader "Weight ▲" [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: Weight
                - generic [ref=e276]: ▲
              - columnheader "Active Chats ▲" [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: Active Chats
                - generic [ref=e280]: ▲
              - columnheader "Status ▲" [ref=e282] [cursor=pointer]:
                - generic [ref=e283]: Status
                - generic [ref=e284]: ▲
              - columnheader "Verification Date ▲" [ref=e286] [cursor=pointer]:
                - generic [ref=e287]: Verification Date
                - generic [ref=e288]: ▲
              - columnheader "Patient Program ▲" [ref=e290] [cursor=pointer]:
                - generic [ref=e291]: Patient Program
                - generic [ref=e292]: ▲
          - rowgroup [ref=e294]:
            - row "Expand Row avatar sds 111 morta 111 2222 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9 10% 0 111 104 No VERIFIED December 10, 2025 12:00 AM Diabetes" [ref=e295]:
              - button "Expand Row" [ref=e297] [cursor=pointer]:
                - img [ref=e298]
              - cell "avatar sds 111 morta 111 2222" [ref=e301]:
                - generic [ref=e302] [cursor=pointer]:
                  - img "avatar" [ref=e307]
                  - link "sds 111 morta 111 2222" [ref=e308]:
                    - /url: /patient/profile/7
                    - generic [ref=e310]:
                      - paragraph [ref=e312]: sds 111 morta 111
                      - generic [ref=e313]: "2222"
              - cell "A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9" [ref=e314]:
                - generic [ref=e316]:
                  - generic "Viral intestinal infection, unspecified" [ref=e317]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e318]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e319]: A49.8
                  - generic "Other viral enteritis" [ref=e320]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e321]: B16.0
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
                  - generic "Hepatitis A with hepatic coma" [ref=e357]: B15.0
                  - generic "Acute hepatitis B w/o delta-agent and without hepatic coma" [ref=e358]: B16.9
                  - generic "Bacterial infection, unspecified" [ref=e359]: A49.9
              - cell "10%" [ref=e360]:
                - generic [ref=e361]: 10%
              - cell "0" [ref=e362]:
                - generic [ref=e363]: "0"
              - cell "111 104" [ref=e364]:
                - generic [ref=e365]:
                  - generic [ref=e367]: "111"
                  - generic [ref=e369]:
                    - img [ref=e371]
                    - text: "104"
              - cell "No" [ref=e373]
              - cell "VERIFIED" [ref=e374]:
                - generic [ref=e375]:
                  - img [ref=e377]
                  - text: VERIFIED
              - cell "December 10, 2025 12:00 AM" [ref=e379]:
                - generic [ref=e380]: December 10, 2025 12:00 AM
              - cell "Diabetes" [ref=e381]:
                - generic [ref=e382]: Diabetes
              - cell [ref=e383]:
                - button [ref=e386] [cursor=pointer]:
                  - img [ref=e387]
            - row "Expand Row avatar Rihana Gates 908 A08.4 B16.0 D55.0 A09 0% 0 - No INVITED - HRT" [ref=e389]:
              - button "Expand Row" [ref=e391] [cursor=pointer]:
                - img [ref=e392]
              - cell "avatar Rihana Gates 908" [ref=e395]:
                - generic [ref=e396] [cursor=pointer]:
                  - img "avatar" [ref=e401]
                  - link "Rihana Gates 908" [ref=e402]:
                    - /url: /patient/profile/21
                    - generic [ref=e404]:
                      - paragraph [ref=e406]: Rihana Gates
                      - generic [ref=e407]: "908"
              - cell "A08.4 B16.0 D55.0 A09" [ref=e408]:
                - generic [ref=e410]:
                  - generic "Viral intestinal infection, unspecified" [ref=e411]: A08.4
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e412]: B16.0
                  - generic "Anemia due to glucose-6-phosphate dehydrogenase deficiency" [ref=e413]: D55.0
                  - generic "Infectious gastroenteritis and colitis, unspecified" [ref=e414]: A09
              - cell "0%" [ref=e415]:
                - generic [ref=e416]: 0%
              - cell "0" [ref=e417]:
                - generic [ref=e418]: "0"
              - cell "-" [ref=e419]
              - cell "No" [ref=e420]
              - cell "INVITED" [ref=e421]:
                - generic [ref=e422]:
                  - img [ref=e424]
                  - text: INVITED
              - cell "-" [ref=e426]:
                - generic [ref=e427]: "-"
              - cell "HRT" [ref=e428]:
                - generic [ref=e429]: HRT
              - cell [ref=e430]:
                - button [ref=e433] [cursor=pointer]:
                  - img [ref=e434]
            - row "Expand Row avatar Mojtaba Mojtahed 991 0% 0 - No INVITED - Diabetes" [ref=e436]:
              - button "Expand Row" [ref=e438] [cursor=pointer]:
                - img [ref=e439]
              - cell "avatar Mojtaba Mojtahed 991" [ref=e442]:
                - generic [ref=e443] [cursor=pointer]:
                  - img "avatar" [ref=e448]
                  - link "Mojtaba Mojtahed 991" [ref=e449]:
                    - /url: /patient/profile/33
                    - generic [ref=e451]:
                      - paragraph [ref=e453]: Mojtaba Mojtahed
                      - generic [ref=e454]: "991"
              - cell [ref=e455]
              - cell "0%" [ref=e456]:
                - generic [ref=e457]: 0%
              - cell "0" [ref=e458]:
                - generic [ref=e459]: "0"
              - cell "-" [ref=e460]
              - cell "No" [ref=e461]
              - cell "INVITED" [ref=e462]:
                - generic [ref=e463]:
                  - img [ref=e465]
                  - text: INVITED
              - cell "-" [ref=e467]:
                - generic [ref=e468]: "-"
              - cell "Diabetes" [ref=e469]:
                - generic [ref=e470]: Diabetes
              - cell [ref=e471]:
                - button [ref=e474] [cursor=pointer]:
                  - img [ref=e475]
            - row "Expand Row avatar Saman Salehi 0% 0 - No VERIFIED June 10, 2022 4:05 PM Diabetes" [ref=e477]:
              - button "Expand Row" [ref=e479] [cursor=pointer]:
                - img [ref=e480]
              - cell "avatar Saman Salehi" [ref=e483]:
                - generic [ref=e484] [cursor=pointer]:
                  - img "avatar" [ref=e489]
                  - link "Saman Salehi" [ref=e490]:
                    - /url: /patient/profile/41
                    - paragraph [ref=e494]: Saman Salehi
              - cell [ref=e495]
              - cell "0%" [ref=e496]:
                - generic [ref=e497]: 0%
              - cell "0" [ref=e498]:
                - generic [ref=e499]: "0"
              - cell "-" [ref=e500]
              - cell "No" [ref=e501]
              - cell "VERIFIED" [ref=e502]:
                - generic [ref=e503]:
                  - img [ref=e505]
                  - text: VERIFIED
              - cell "June 10, 2022 4:05 PM" [ref=e507]:
                - generic [ref=e508]: June 10, 2022 4:05 PM
              - cell "Diabetes" [ref=e509]:
                - generic [ref=e510]: Diabetes
              - cell [ref=e511]:
                - button [ref=e514] [cursor=pointer]:
                  - img [ref=e515]
            - row "Expand Row avatar Morgan A abc123pkt1 A08.8 0% 0 65 No PENDING - Diabetes" [ref=e517]:
              - button "Expand Row" [ref=e519] [cursor=pointer]:
                - img [ref=e520]
              - cell "avatar Morgan A abc123pkt1" [ref=e523]:
                - generic [ref=e524] [cursor=pointer]:
                  - img "avatar" [ref=e529]
                  - link "Morgan A abc123pkt1" [ref=e530]:
                    - /url: /patient/profile/46
                    - generic [ref=e532]:
                      - paragraph [ref=e534]: Morgan A
                      - generic [ref=e535]: abc123pkt1
              - cell "A08.8" [ref=e536]:
                - generic "Other specified intestinal infections" [ref=e539]: A08.8
              - cell "0%" [ref=e540]:
                - generic [ref=e541]: 0%
              - cell "0" [ref=e542]:
                - generic [ref=e543]: "0"
              - cell "65" [ref=e544]:
                - generic [ref=e547]: "65"
              - cell "No" [ref=e548]
              - cell "PENDING" [ref=e549]:
                - generic [ref=e550]:
                  - img [ref=e552]
                  - text: PENDING
              - cell "-" [ref=e554]:
                - generic [ref=e555]: "-"
              - cell "Diabetes" [ref=e556]:
                - generic [ref=e557]: Diabetes
              - cell [ref=e558]:
                - button [ref=e561] [cursor=pointer]:
                  - img [ref=e562]
            - row "Expand Row avatar Saman Salehi 990 0% 0 - No ACTIVATED - Diabetes" [ref=e564]:
              - button "Expand Row" [ref=e566] [cursor=pointer]:
                - img [ref=e567]
              - cell "avatar Saman Salehi 990" [ref=e570]:
                - generic [ref=e571] [cursor=pointer]:
                  - img "avatar" [ref=e576]
                  - link "Saman Salehi 990" [ref=e577]:
                    - /url: /patient/profile/52
                    - generic [ref=e579]:
                      - paragraph [ref=e581]: Saman Salehi
                      - generic [ref=e582]: "990"
              - cell [ref=e583]
              - cell "0%" [ref=e584]:
                - generic [ref=e585]: 0%
              - cell "0" [ref=e586]:
                - generic [ref=e587]: "0"
              - cell "-" [ref=e588]
              - cell "No" [ref=e589]
              - cell "ACTIVATED" [ref=e590]:
                - generic [ref=e591]:
                  - img [ref=e593]
                  - text: ACTIVATED
              - cell "-" [ref=e595]:
                - generic [ref=e596]: "-"
              - cell "Diabetes" [ref=e597]:
                - generic [ref=e598]: Diabetes
              - cell [ref=e599]:
                - button [ref=e602] [cursor=pointer]:
                  - img [ref=e603]
            - row "Expand Row avatar saman salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e605]:
              - button "Expand Row" [ref=e607] [cursor=pointer]:
                - img [ref=e608]
              - cell "avatar saman salehi" [ref=e611]:
                - generic [ref=e612] [cursor=pointer]:
                  - img "avatar" [ref=e617]
                  - link "saman salehi" [ref=e618]:
                    - /url: /patient/profile/53
                    - paragraph [ref=e622]: saman salehi
              - cell [ref=e623]
              - cell "0%" [ref=e624]:
                - generic [ref=e625]: 0%
              - cell "0" [ref=e626]:
                - generic [ref=e627]: "0"
              - cell "-" [ref=e628]
              - cell "No" [ref=e629]
              - cell "ACTIVATED" [ref=e630]:
                - generic [ref=e631]:
                  - img [ref=e633]
                  - text: ACTIVATED
              - cell "-" [ref=e635]:
                - generic [ref=e636]: "-"
              - cell "Diabetes" [ref=e637]:
                - generic [ref=e638]: Diabetes
              - cell [ref=e639]:
                - button [ref=e642] [cursor=pointer]:
                  - img [ref=e643]
            - row "Expand Row avatar 213 123wq qwqw 0% 0 - No VERIFIED June 14, 2022 5:08 PM Diabetes" [ref=e645]:
              - button "Expand Row" [ref=e647] [cursor=pointer]:
                - img [ref=e648]
              - cell "avatar 213 123wq qwqw" [ref=e651]:
                - generic [ref=e652] [cursor=pointer]:
                  - img "avatar" [ref=e657]
                  - link "213 123wq qwqw" [ref=e658]:
                    - /url: /patient/profile/54
                    - generic [ref=e660]:
                      - paragraph [ref=e662]: 213 123wq
                      - generic [ref=e663]: qwqw
              - cell [ref=e664]
              - cell "0%" [ref=e665]:
                - generic [ref=e666]: 0%
              - cell "0" [ref=e667]:
                - generic [ref=e668]: "0"
              - cell "-" [ref=e669]
              - cell "No" [ref=e670]
              - cell "VERIFIED" [ref=e671]:
                - generic [ref=e672]:
                  - img [ref=e674]
                  - text: VERIFIED
              - cell "June 14, 2022 5:08 PM" [ref=e676]:
                - generic [ref=e677]: June 14, 2022 5:08 PM
              - cell "Diabetes" [ref=e678]:
                - generic [ref=e679]: Diabetes
              - cell [ref=e680]:
                - button [ref=e683] [cursor=pointer]:
                  - img [ref=e684]
            - row "Expand Row avatar Saman Salehi 0% 0 - No ACTIVATED - Diabetes" [ref=e686]:
              - button "Expand Row" [ref=e688] [cursor=pointer]:
                - img [ref=e689]
              - cell "avatar Saman Salehi" [ref=e692]:
                - generic [ref=e693] [cursor=pointer]:
                  - img "avatar" [ref=e698]
                  - link "Saman Salehi" [ref=e699]:
                    - /url: /patient/profile/55
                    - paragraph [ref=e703]: Saman Salehi
              - cell [ref=e704]
              - cell "0%" [ref=e705]:
                - generic [ref=e706]: 0%
              - cell "0" [ref=e707]:
                - generic [ref=e708]: "0"
              - cell "-" [ref=e709]
              - cell "No" [ref=e710]
              - cell "ACTIVATED" [ref=e711]:
                - generic [ref=e712]:
                  - img [ref=e714]
                  - text: ACTIVATED
              - cell "-" [ref=e716]:
                - generic [ref=e717]: "-"
              - cell "Diabetes" [ref=e718]:
                - generic [ref=e719]: Diabetes
              - cell [ref=e720]:
                - button [ref=e723] [cursor=pointer]:
                  - img [ref=e724]
            - row "Expand Row avatar sa qwe 122 0% 0 - No VERIFIED July 4, 2022 9:58 AM Diabetes" [ref=e726]:
              - button "Expand Row" [ref=e728] [cursor=pointer]:
                - img [ref=e729]
              - cell "avatar sa qwe 122" [ref=e732]:
                - generic [ref=e733] [cursor=pointer]:
                  - img "avatar" [ref=e738]
                  - link "sa qwe 122" [ref=e739]:
                    - /url: /patient/profile/56
                    - generic [ref=e741]:
                      - paragraph [ref=e743]: sa qwe
                      - generic [ref=e744]: "122"
              - cell [ref=e745]
              - cell "0%" [ref=e746]:
                - generic [ref=e747]: 0%
              - cell "0" [ref=e748]:
                - generic [ref=e749]: "0"
              - cell "-" [ref=e750]
              - cell "No" [ref=e751]
              - cell "VERIFIED" [ref=e752]:
                - generic [ref=e753]:
                  - img [ref=e755]
                  - text: VERIFIED
              - cell "July 4, 2022 9:58 AM" [ref=e757]:
                - generic [ref=e758]: July 4, 2022 9:58 AM
              - cell "Diabetes" [ref=e759]:
                - generic [ref=e760]: Diabetes
              - cell [ref=e761]:
                - button [ref=e764] [cursor=pointer]:
                  - img [ref=e765]
        - list [ref=e768]:
          - listitem:
            - img
          - listitem [ref=e769]: "1"
          - listitem [ref=e770]: "2"
          - listitem [ref=e771]: "3"
          - listitem [ref=e772]: "4"
          - listitem [ref=e773]: "5"
          - listitem [ref=e774]: …
          - listitem [ref=e775]: "791"
          - listitem [ref=e776]:
            - img [ref=e777]
      - generic [ref=e779]:
        - generic [ref=e780]:
          - paragraph [ref=e782]: Chat
          - button "delete" [ref=e783] [cursor=pointer]:
            - img [ref=e784]
        - generic [ref=e788]:
          - paragraph [ref=e789] [cursor=pointer]: Metabolic
          - paragraph [ref=e790] [cursor=pointer]: Zone
  - alert [ref=e791]: Metabolic
```

# Test source

```ts
  31  | 
  32  |   // ── Generate a new coupon and return the coupon code ─────────
  33  |   async generateCoupon() {
  34  |     await this.generateNewCouponBtn.click();
  35  |     // Wait for the generated coupon code to appear (label: "Active Coupon")
  36  |     await this.page.waitForTimeout(1000);
  37  |     // The coupon code appears as text like "MH-XXXXXX" near "Active Coupon" label
  38  |     const couponText = await this.page
  39  |       .locator('text=/MH-[A-Z0-9]+/')
  40  |       .first()
  41  |       .textContent({ timeout: 10000 })
  42  |       .catch(() => null);
  43  |     return couponText ? couponText.trim() : null;
  44  |   }
  45  | 
  46  |   // ── Navigate to Coupons list page ─────────────────────────────
  47  |   async openCouponsList() {
  48  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  49  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  50  |   }
  51  | 
  52  |   // ── Search coupons by patient name ────────────────────────────
  53  |   async searchByPatient(patientName) {
  54  |     await this.couponSearchInput.click();
  55  |     await this.couponSearchInput.fill(patientName);
  56  |     await this.couponSearchInput.press('Enter');
  57  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  58  |   }
  59  | 
  60  |   // ── Filter coupons by status ──────────────────────────────────
  61  |   async filterByStatus(status) {
  62  |     await this.statusFilterBtn.click();
  63  |     await this.page.getByRole('option', { name: status }).click();
  64  |     await this.page.waitForTimeout(500);
  65  |   }
  66  | 
  67  |   // ── Set date filter to today ──────────────────────────────────
  68  |   async setDateToToday() {
  69  |     await this.datepickerBtn.click();
  70  |     const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  71  |     await this.dateFromInput.fill(today);
  72  |     await this.page.waitForTimeout(500);
  73  |   }
  74  | 
  75  |   // ── Get the status of a coupon code from the list ────────────
  76  |   // Returns 'OPEN', 'REDEEMED', or null if not found
  77  |   async getCouponStatus(couponCode) {
  78  |     // Wait up to 5s for the row to appear (pagination/filter may delay it)
  79  |     const row = this.page.locator('tr').filter({ hasText: couponCode }).first();
  80  |     const visible = await row.isVisible({ timeout: 8000 }).catch(() => false);
  81  |     if (!visible) return null;
  82  |     // Status cell is the 4th cell (index 3): Patient | MRN | Code | Status
  83  |     const cells = row.locator('td');
  84  |     const statusText = await cells.nth(3).textContent({ timeout: 3000 }).catch(() => null);
  85  |     return statusText ? statusText.trim() : null;
  86  |   }
  87  | 
  88  |   // ── Get the first coupon code visible in the list ────────────
  89  |   async getFirstCouponCode() {
  90  |     const couponCell = this.page
  91  |       .locator('td, [role="cell"]')
  92  |       .filter({ hasText: /^MH-[A-Z0-9]+$/ })
  93  |       .first();
  94  |     return couponCell.textContent({ timeout: 5000 }).catch(() => null);
  95  |   }
  96  | 
  97  |   // ── Copy coupon code from list (right-click confirmed in Codegen) ──
  98  |   async getCouponCodeFromList(couponCode) {
  99  |     const cell = this.page.getByText(couponCode).first();
  100 |     await cell.waitFor({ state: 'visible', timeout: 5000 });
  101 |     return (await cell.textContent()).trim();
  102 |   }
  103 | 
  104 |   // ── Redeem a coupon on a patient profile ─────────────────────
  105 |   // Returns the result message after redeeming
  106 |   async redeemCoupon(couponCode, pin = '1234') {
  107 |     await this.redeemCouponBtn.click();
  108 |     await this.couponCodeInput.waitFor({ state: 'visible', timeout: 5000 });
  109 |     await this.couponCodeInput.fill(couponCode);
  110 |     await this.pinInput.fill(pin);
  111 |     await this.redeemCodeBtn.click();
  112 |     // Wait for success/error response
  113 |     await this.page.waitForTimeout(1500);
  114 |     // Capture any alert/toast/message shown after redeeming
  115 |     const message = await this.page
  116 |       .locator('[role="alert"], .toast, [class*="alert"], [class*="Alert"], [class*="error"], [class*="success"]')
  117 |       .first()
  118 |       .textContent({ timeout: 5000 })
  119 |       .catch(() => null);
  120 |     return message ? message.trim() : null;
  121 |   }
  122 | 
  123 |   // ── Navigate to patient profile via search ────────────────────
  124 |   async openPatientProfile(patientName, patientLinkText) {
  125 |     await this.patientsMenuBtn.click();
  126 |     const search = this.page.getByRole('textbox', { name: 'Search' });
  127 |     await search.click();
  128 |     await search.fill(patientName);
  129 |     await search.press('Enter');
  130 |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
> 131 |     await this.page.getByRole('link', { name: new RegExp(patientLinkText, 'i') }).first().click();
      |                                                                                           ^ Error: locator.click: Test timeout of 60000ms exceeded.
  132 |   }
  133 | }
  134 | 
  135 | module.exports = { CouponPage };
```