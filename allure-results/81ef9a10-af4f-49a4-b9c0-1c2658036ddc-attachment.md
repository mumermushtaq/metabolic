# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> redeems a coupon and verifies REDEEMED status with redeemed-by name
- Location: tests\e2e\coupons.spec.js:28:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('cell', { name: /avatar Umer Mushtaq MRN405/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - generic [ref=e44]: (7911)
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
            - generic [ref=e248]:
              - generic [ref=e249] [cursor=pointer]: Test Filter
              - button [ref=e251] [cursor=pointer]:
                - img [ref=e253]
            - generic [ref=e256]:
              - generic [ref=e257] [cursor=pointer]: Male Users Test 1782847257200
              - button [ref=e259] [cursor=pointer]:
                - img [ref=e261]
            - generic [ref=e264]:
              - generic [ref=e265] [cursor=pointer]: Male Users Test 1782850799223
              - button [ref=e267] [cursor=pointer]:
                - img [ref=e269]
            - generic [ref=e272]:
              - generic [ref=e273] [cursor=pointer]: Male Users Test 1782851141026
              - button [ref=e275] [cursor=pointer]:
                - img [ref=e277]
            - generic [ref=e280]:
              - generic [ref=e281] [cursor=pointer]: Male Users Test 1782857951357
              - button [ref=e283] [cursor=pointer]:
                - img [ref=e285]
            - generic [ref=e288]:
              - generic [ref=e289] [cursor=pointer]: Male Users Test 1782859752317
              - button [ref=e291] [cursor=pointer]:
                - img [ref=e293]
      - generic [ref=e297]:
        - table [ref=e301]:
          - rowgroup [ref=e302]:
            - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Account Created ▲ Verification Date ▲ Patient Program ▲" [ref=e303]:
              - columnheader "Patient ▲" [ref=e306] [cursor=pointer]:
                - generic [ref=e307]: Patient
                - generic [ref=e308]: ▲
              - columnheader "Diagnosis ▲" [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: Diagnosis
                - generic [ref=e312]: ▲
              - columnheader "TIR ▲" [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: TIR
                - generic [ref=e316]: ▲
              - columnheader "Food Log ▲" [ref=e318] [cursor=pointer]:
                - generic [ref=e319]: Food Log
                - generic [ref=e320]: ▲
              - columnheader "Weight ▲" [ref=e322] [cursor=pointer]:
                - generic [ref=e323]: Weight
                - generic [ref=e324]: ▲
              - columnheader "Active Chats ▲" [ref=e326] [cursor=pointer]:
                - generic [ref=e327]: Active Chats
                - generic [ref=e328]: ▲
              - columnheader "Status ▲" [ref=e330] [cursor=pointer]:
                - generic [ref=e331]: Status
                - generic [ref=e332]: ▲
              - columnheader "Account Created ▲" [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: Account Created
                - generic [ref=e336]: ▲
              - columnheader "Verification Date ▲" [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: Verification Date
                - generic [ref=e340]: ▲
              - columnheader "Patient Program ▲" [ref=e342] [cursor=pointer]:
                - generic "Patient Program" [ref=e343]
                - generic [ref=e344]: ▲
          - rowgroup [ref=e346]:
            - row "Expand Row avatar sds 111 morta 111 2222 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9 10% 0 111 104 No VERIFIED May 9, 2022 1:38 PM December 10, 2025 12:00 AM Diabetes" [ref=e347]:
              - button "Expand Row" [ref=e349] [cursor=pointer]:
                - img [ref=e350]
              - cell "avatar sds 111 morta 111 2222" [ref=e353]:
                - generic [ref=e354] [cursor=pointer]:
                  - img "avatar" [ref=e359]
                  - link "sds 111 morta 111 2222" [ref=e360]:
                    - /url: /patient/profile/7
                    - generic [ref=e362]:
                      - paragraph [ref=e364]: sds 111 morta 111
                      - generic [ref=e365]: "2222"
              - cell "A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9" [ref=e366]:
                - generic [ref=e368]:
                  - generic "Viral intestinal infection, unspecified" [ref=e369]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e370]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e371]: A49.8
                  - generic "Other viral enteritis" [ref=e372]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e373]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e374]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e375]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e376]: A49.8
                  - generic "Other viral enteritis" [ref=e377]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e378]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e379]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e380]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e381]: A49.8
                  - generic "Other viral enteritis" [ref=e382]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e383]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e384]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e385]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e386]: A49.8
                  - generic "Other viral enteritis" [ref=e387]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e388]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e389]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e390]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e391]: A49.8
                  - generic "Other viral enteritis" [ref=e392]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e393]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e394]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e395]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e396]: A49.8
                  - generic "Other viral enteritis" [ref=e397]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e398]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e399]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e400]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e401]: A49.8
                  - generic "Other viral enteritis" [ref=e402]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e403]: B16.0
                  - generic "Viral intestinal infection, unspecified" [ref=e404]: A08.4
                  - generic "Viral intestinal infection, unspecified" [ref=e405]: A08.4
                  - generic "Other bacterial infections of unspecified site" [ref=e406]: A49.8
                  - generic "Other viral enteritis" [ref=e407]: A08.39
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e408]: B16.0
                  - generic "Hepatitis A with hepatic coma" [ref=e409]: B15.0
                  - generic "Acute hepatitis B w/o delta-agent and without hepatic coma" [ref=e410]: B16.9
                  - generic "Bacterial infection, unspecified" [ref=e411]: A49.9
              - cell "10%" [ref=e412]:
                - generic [ref=e413]: 10%
              - cell "0" [ref=e414]:
                - generic [ref=e415]: "0"
              - cell "111 104" [ref=e416]:
                - generic [ref=e417]:
                  - generic [ref=e419]: "111"
                  - generic [ref=e421]:
                    - img [ref=e423]
                    - text: "104"
              - cell "No" [ref=e425]
              - cell "VERIFIED" [ref=e426]:
                - generic [ref=e427]:
                  - img [ref=e429]
                  - text: VERIFIED
              - cell "May 9, 2022 1:38 PM" [ref=e431]:
                - generic [ref=e432]: May 9, 2022 1:38 PM
              - cell "December 10, 2025 12:00 AM" [ref=e433]:
                - generic [ref=e434]: December 10, 2025 12:00 AM
              - cell "Diabetes" [ref=e435]:
                - generic [ref=e436]: Diabetes
              - cell [ref=e437]:
                - button [ref=e440] [cursor=pointer]:
                  - img [ref=e441]
            - row "Expand Row avatar Rihana Gates 908 A08.4 B16.0 D55.0 A09 0% 0 - No INVITED May 17, 2022 4:56 PM - HRT" [ref=e443]:
              - button "Expand Row" [ref=e445] [cursor=pointer]:
                - img [ref=e446]
              - cell "avatar Rihana Gates 908" [ref=e449]:
                - generic [ref=e450] [cursor=pointer]:
                  - img "avatar" [ref=e455]
                  - link "Rihana Gates 908" [ref=e456]:
                    - /url: /patient/profile/21
                    - generic [ref=e458]:
                      - paragraph [ref=e460]: Rihana Gates
                      - generic [ref=e461]: "908"
              - cell "A08.4 B16.0 D55.0 A09" [ref=e462]:
                - generic [ref=e464]:
                  - generic "Viral intestinal infection, unspecified" [ref=e465]: A08.4
                  - generic "Acute hepatitis B with delta-agent with hepatic coma" [ref=e466]: B16.0
                  - generic "Anemia due to glucose-6-phosphate dehydrogenase deficiency" [ref=e467]: D55.0
                  - generic "Infectious gastroenteritis and colitis, unspecified" [ref=e468]: A09
              - cell "0%" [ref=e469]:
                - generic [ref=e470]: 0%
              - cell "0" [ref=e471]:
                - generic [ref=e472]: "0"
              - cell "-" [ref=e473]
              - cell "No" [ref=e474]
              - cell "INVITED" [ref=e475]:
                - generic [ref=e476]:
                  - img [ref=e478]
                  - text: INVITED
              - cell "May 17, 2022 4:56 PM" [ref=e480]:
                - generic [ref=e481]: May 17, 2022 4:56 PM
              - cell "-" [ref=e482]:
                - generic [ref=e483]: "-"
              - cell "HRT" [ref=e484]:
                - generic [ref=e485]: HRT
              - cell [ref=e486]:
                - button [ref=e489] [cursor=pointer]:
                  - img [ref=e490]
            - row "Expand Row avatar Mojtaba Mojtahed 991 0% 0 - No INVITED May 22, 2022 11:03 PM - Diabetes" [ref=e492]:
              - button "Expand Row" [ref=e494] [cursor=pointer]:
                - img [ref=e495]
              - cell "avatar Mojtaba Mojtahed 991" [ref=e498]:
                - generic [ref=e499] [cursor=pointer]:
                  - img "avatar" [ref=e504]
                  - link "Mojtaba Mojtahed 991" [ref=e505]:
                    - /url: /patient/profile/33
                    - generic [ref=e507]:
                      - paragraph [ref=e509]: Mojtaba Mojtahed
                      - generic [ref=e510]: "991"
              - cell [ref=e511]
              - cell "0%" [ref=e512]:
                - generic [ref=e513]: 0%
              - cell "0" [ref=e514]:
                - generic [ref=e515]: "0"
              - cell "-" [ref=e516]
              - cell "No" [ref=e517]
              - cell "INVITED" [ref=e518]:
                - generic [ref=e519]:
                  - img [ref=e521]
                  - text: INVITED
              - cell "May 22, 2022 11:03 PM" [ref=e523]:
                - generic [ref=e524]: May 22, 2022 11:03 PM
              - cell "-" [ref=e525]:
                - generic [ref=e526]: "-"
              - cell "Diabetes" [ref=e527]:
                - generic [ref=e528]: Diabetes
              - cell [ref=e529]:
                - button [ref=e532] [cursor=pointer]:
                  - img [ref=e533]
            - row "Expand Row avatar Saman Salehi 0% 0 - No VERIFIED June 5, 2022 2:39 PM June 10, 2022 4:05 PM Diabetes" [ref=e535]:
              - button "Expand Row" [ref=e537] [cursor=pointer]:
                - img [ref=e538]
              - cell "avatar Saman Salehi" [ref=e541]:
                - generic [ref=e542] [cursor=pointer]:
                  - img "avatar" [ref=e547]
                  - link "Saman Salehi" [ref=e548]:
                    - /url: /patient/profile/41
                    - paragraph [ref=e552]: Saman Salehi
              - cell [ref=e553]
              - cell "0%" [ref=e554]:
                - generic [ref=e555]: 0%
              - cell "0" [ref=e556]:
                - generic [ref=e557]: "0"
              - cell "-" [ref=e558]
              - cell "No" [ref=e559]
              - cell "VERIFIED" [ref=e560]:
                - generic [ref=e561]:
                  - img [ref=e563]
                  - text: VERIFIED
              - cell "June 5, 2022 2:39 PM" [ref=e565]:
                - generic [ref=e566]: June 5, 2022 2:39 PM
              - cell "June 10, 2022 4:05 PM" [ref=e567]:
                - generic [ref=e568]: June 10, 2022 4:05 PM
              - cell "Diabetes" [ref=e569]:
                - generic [ref=e570]: Diabetes
              - cell [ref=e571]:
                - button [ref=e574] [cursor=pointer]:
                  - img [ref=e575]
            - row "Expand Row avatar Morgan A abc123pkt1 A08.8 0% 0 65 No PENDING June 7, 2022 8:36 PM - Diabetes" [ref=e577]:
              - button "Expand Row" [ref=e579] [cursor=pointer]:
                - img [ref=e580]
              - cell "avatar Morgan A abc123pkt1" [ref=e583]:
                - generic [ref=e584] [cursor=pointer]:
                  - img "avatar" [ref=e589]
                  - link "Morgan A abc123pkt1" [ref=e590]:
                    - /url: /patient/profile/46
                    - generic [ref=e592]:
                      - paragraph [ref=e594]: Morgan A
                      - generic [ref=e595]: abc123pkt1
              - cell "A08.8" [ref=e596]:
                - generic "Other specified intestinal infections" [ref=e599]: A08.8
              - cell "0%" [ref=e600]:
                - generic [ref=e601]: 0%
              - cell "0" [ref=e602]:
                - generic [ref=e603]: "0"
              - cell "65" [ref=e604]:
                - generic [ref=e607]: "65"
              - cell "No" [ref=e608]
              - cell "PENDING" [ref=e609]:
                - generic [ref=e610]:
                  - img [ref=e612]
                  - text: PENDING
              - cell "June 7, 2022 8:36 PM" [ref=e614]:
                - generic [ref=e615]: June 7, 2022 8:36 PM
              - cell "-" [ref=e616]:
                - generic [ref=e617]: "-"
              - cell "Diabetes" [ref=e618]:
                - generic [ref=e619]: Diabetes
              - cell [ref=e620]:
                - button [ref=e623] [cursor=pointer]:
                  - img [ref=e624]
            - row "Expand Row avatar Saman Salehi 990 0% 0 - No ACTIVATED June 8, 2022 11:29 PM - Diabetes" [ref=e626]:
              - button "Expand Row" [ref=e628] [cursor=pointer]:
                - img [ref=e629]
              - cell "avatar Saman Salehi 990" [ref=e632]:
                - generic [ref=e633] [cursor=pointer]:
                  - img "avatar" [ref=e638]
                  - link "Saman Salehi 990" [ref=e639]:
                    - /url: /patient/profile/52
                    - generic [ref=e641]:
                      - paragraph [ref=e643]: Saman Salehi
                      - generic [ref=e644]: "990"
              - cell [ref=e645]
              - cell "0%" [ref=e646]:
                - generic [ref=e647]: 0%
              - cell "0" [ref=e648]:
                - generic [ref=e649]: "0"
              - cell "-" [ref=e650]
              - cell "No" [ref=e651]
              - cell "ACTIVATED" [ref=e652]:
                - generic [ref=e653]:
                  - img [ref=e655]
                  - text: ACTIVATED
              - cell "June 8, 2022 11:29 PM" [ref=e657]:
                - generic [ref=e658]: June 8, 2022 11:29 PM
              - cell "-" [ref=e659]:
                - generic [ref=e660]: "-"
              - cell "Diabetes" [ref=e661]:
                - generic [ref=e662]: Diabetes
              - cell [ref=e663]:
                - button [ref=e666] [cursor=pointer]:
                  - img [ref=e667]
            - row "Expand Row avatar saman salehi 0% 0 - No ACTIVATED June 9, 2022 12:28 AM - Diabetes" [ref=e669]:
              - button "Expand Row" [ref=e671] [cursor=pointer]:
                - img [ref=e672]
              - cell "avatar saman salehi" [ref=e675]:
                - generic [ref=e676] [cursor=pointer]:
                  - img "avatar" [ref=e681]
                  - link "saman salehi" [ref=e682]:
                    - /url: /patient/profile/53
                    - paragraph [ref=e686]: saman salehi
              - cell [ref=e687]
              - cell "0%" [ref=e688]:
                - generic [ref=e689]: 0%
              - cell "0" [ref=e690]:
                - generic [ref=e691]: "0"
              - cell "-" [ref=e692]
              - cell "No" [ref=e693]
              - cell "ACTIVATED" [ref=e694]:
                - generic [ref=e695]:
                  - img [ref=e697]
                  - text: ACTIVATED
              - cell "June 9, 2022 12:28 AM" [ref=e699]:
                - generic [ref=e700]: June 9, 2022 12:28 AM
              - cell "-" [ref=e701]:
                - generic [ref=e702]: "-"
              - cell "Diabetes" [ref=e703]:
                - generic [ref=e704]: Diabetes
              - cell [ref=e705]:
                - button [ref=e708] [cursor=pointer]:
                  - img [ref=e709]
            - row "Expand Row avatar 213 123wq qwqw 0% 0 - No VERIFIED June 9, 2022 12:33 AM June 14, 2022 5:08 PM Diabetes" [ref=e711]:
              - button "Expand Row" [ref=e713] [cursor=pointer]:
                - img [ref=e714]
              - cell "avatar 213 123wq qwqw" [ref=e717]:
                - generic [ref=e718] [cursor=pointer]:
                  - img "avatar" [ref=e723]
                  - link "213 123wq qwqw" [ref=e724]:
                    - /url: /patient/profile/54
                    - generic [ref=e726]:
                      - paragraph [ref=e728]: 213 123wq
                      - generic [ref=e729]: qwqw
              - cell [ref=e730]
              - cell "0%" [ref=e731]:
                - generic [ref=e732]: 0%
              - cell "0" [ref=e733]:
                - generic [ref=e734]: "0"
              - cell "-" [ref=e735]
              - cell "No" [ref=e736]
              - cell "VERIFIED" [ref=e737]:
                - generic [ref=e738]:
                  - img [ref=e740]
                  - text: VERIFIED
              - cell "June 9, 2022 12:33 AM" [ref=e742]:
                - generic [ref=e743]: June 9, 2022 12:33 AM
              - cell "June 14, 2022 5:08 PM" [ref=e744]:
                - generic [ref=e745]: June 14, 2022 5:08 PM
              - cell "Diabetes" [ref=e746]:
                - generic [ref=e747]: Diabetes
              - cell [ref=e748]:
                - button [ref=e751] [cursor=pointer]:
                  - img [ref=e752]
            - row "Expand Row avatar Saman Salehi 0% 0 - No ACTIVATED June 9, 2022 1:44 AM - Diabetes" [ref=e754]:
              - button "Expand Row" [ref=e756] [cursor=pointer]:
                - img [ref=e757]
              - cell "avatar Saman Salehi" [ref=e760]:
                - generic [ref=e761] [cursor=pointer]:
                  - img "avatar" [ref=e766]
                  - link "Saman Salehi" [ref=e767]:
                    - /url: /patient/profile/55
                    - paragraph [ref=e771]: Saman Salehi
              - cell [ref=e772]
              - cell "0%" [ref=e773]:
                - generic [ref=e774]: 0%
              - cell "0" [ref=e775]:
                - generic [ref=e776]: "0"
              - cell "-" [ref=e777]
              - cell "No" [ref=e778]
              - cell "ACTIVATED" [ref=e779]:
                - generic [ref=e780]:
                  - img [ref=e782]
                  - text: ACTIVATED
              - cell "June 9, 2022 1:44 AM" [ref=e784]:
                - generic [ref=e785]: June 9, 2022 1:44 AM
              - cell "-" [ref=e786]:
                - generic [ref=e787]: "-"
              - cell "Diabetes" [ref=e788]:
                - generic [ref=e789]: Diabetes
              - cell [ref=e790]:
                - button [ref=e793] [cursor=pointer]:
                  - img [ref=e794]
            - row "Expand Row avatar sa qwe 122 0% 0 - No VERIFIED June 9, 2022 1:53 AM July 4, 2022 9:58 AM Diabetes" [ref=e796]:
              - button "Expand Row" [ref=e798] [cursor=pointer]:
                - img [ref=e799]
              - cell "avatar sa qwe 122" [ref=e802]:
                - generic [ref=e803] [cursor=pointer]:
                  - img "avatar" [ref=e808]
                  - link "sa qwe 122" [ref=e809]:
                    - /url: /patient/profile/56
                    - generic [ref=e811]:
                      - paragraph [ref=e813]: sa qwe
                      - generic [ref=e814]: "122"
              - cell [ref=e815]
              - cell "0%" [ref=e816]:
                - generic [ref=e817]: 0%
              - cell "0" [ref=e818]:
                - generic [ref=e819]: "0"
              - cell "-" [ref=e820]
              - cell "No" [ref=e821]
              - cell "VERIFIED" [ref=e822]:
                - generic [ref=e823]:
                  - img [ref=e825]
                  - text: VERIFIED
              - cell "June 9, 2022 1:53 AM" [ref=e827]:
                - generic [ref=e828]: June 9, 2022 1:53 AM
              - cell "July 4, 2022 9:58 AM" [ref=e829]:
                - generic [ref=e830]: July 4, 2022 9:58 AM
              - cell "Diabetes" [ref=e831]:
                - generic [ref=e832]: Diabetes
              - cell [ref=e833]:
                - button [ref=e836] [cursor=pointer]:
                  - img [ref=e837]
        - list [ref=e840]:
          - listitem:
            - img
          - listitem [ref=e841]: "1"
          - listitem [ref=e842]: "2"
          - listitem [ref=e843]: "3"
          - listitem [ref=e844]: "4"
          - listitem [ref=e845]: "5"
          - listitem [ref=e846]: …
          - listitem [ref=e847]: "792"
          - listitem [ref=e848]:
            - img [ref=e849]
      - generic [ref=e851]:
        - generic [ref=e852]:
          - paragraph [ref=e854]: Chat
          - button "delete" [ref=e855] [cursor=pointer]:
            - img [ref=e856]
        - generic [ref=e860]:
          - paragraph [ref=e861] [cursor=pointer]: Metabolic
          - paragraph [ref=e862] [cursor=pointer]: Zone
  - alert [ref=e863]: Metabolic
```

# Test source

```ts
  1   | ﻿class CouponsPage {
  2   |   constructor(page) {
  3   |     this.page = page;
  4   | 
  5   |     // Add Coupon tab (patient profile)
  6   |     this.addCouponTab        = page.getByRole('link', { name: 'Add Coupon' });
  7   |     this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
  8   |     this.redeemCouponBtn     = page.getByRole('button', { name: 'Redeem Coupon' });
  9   |     this.enterCouponCodeInput = page.getByRole('textbox', { name: 'Enter coupon code' });
  10  |     this.pinInput            = page.getByRole('textbox', { name: 'PIN' });
  11  |     this.redeemCodeBtn       = page.getByRole('button', { name: 'Redeem Code' });
  12  | 
  13  |     // Sidebar nav
  14  |     this.couponsSideNavLink   = page.getByRole('link', { name: 'Coupons' });
  15  |     this.patientsSideNavLink  = page.getByRole('link', { name: 'sidebarIcon2 Patients' });
  16  | 
  17  |     // Patient search (patients list page)
  18  |     this.patientSearchInput  = page.getByRole('textbox', { name: 'Search' });
  19  |   }
  20  | 
  21  |   // ── Navigate directly to a patient's Add Coupon tab ───────────
  22  |   async openPatientAddCouponTab(patientId) {
  23  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
  24  |     await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  25  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  26  |       .waitFor({ state: 'visible', timeout: 15000 });
  27  |   }
  28  | 
  29  |   // ── Generate a new coupon and return the active coupon code ───
  30  |   // Codegen: click Generate New Coupon, then read the "Active Coupon" text above.
  31  |   // The code appears as a paragraph (e.g. "MH-YC9WK6") after generation.
  32  |   async generateNewCoupon() {
  33  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  34  |     await this.generateNewCouponBtn.click();
  35  | 
  36  |     // Poll until the active coupon code updates from placeholder to a real code
  37  |     let code = null;
  38  |     for (let attempt = 0; attempt < 30; attempt++) {
  39  |       // MH- prefix + 6 or 7 alphanumeric chars (Codegen showed MH-YC9WK6 = 7 chars)
  40  |       const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6,7}$/).first();
  41  |       const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
  42  |       if (text && !text.trim().includes('X')) {
  43  |         code = text.trim();
  44  |         break;
  45  |       }
  46  |       await this.page.waitForTimeout(1000);
  47  |     }
  48  | 
  49  |     if (!code) throw new Error('Coupon code did not load after 30s');
  50  |     return code;
  51  |   }
  52  | 
  53  |   // ── Navigate to Coupon List ───────────────────────────────────
  54  |   // Use goto instead of clicking the sidebar link — clicking the Coupons nav
  55  |   // while on a patient profile triggers an "Invalid patient id" error toast.
  56  |   async openCouponsList() {
  57  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  58  |     await this.page.waitForURL('**/coupon', { timeout: 15000 });
  59  |     // Wait for at least one coupon row to appear
  60  |     await this.page.getByRole('cell', { name: /MH-[A-Z0-9]{6}/ }).first()
  61  |       .waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  62  |   }
  63  | 
  64  |   // ── Navigate back to patient's Add Coupon tab via patient search
  65  |   async goToPatientAddCoupon(patientName, patientCellText) {
  66  |     await this.patientsSideNavLink.click();
  67  |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  68  |     await this.patientSearchInput.fill(patientName);
  69  |     // Codegen: click the avatar cell which includes name + MRN
> 70  |     await this.page.getByRole('cell', { name: new RegExp(patientCellText, 'i') }).click();
      |                                                                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  71  |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  72  |     await this.addCouponTab.click();
  73  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  74  |       .waitFor({ state: 'visible', timeout: 15000 });
  75  |   }
  76  | 
  77  |   // ── Redeem a coupon ───────────────────────────────────────────
  78  |   async redeemCoupon(couponCode, pin = '1234') {
  79  |     await this.redeemCouponBtn.click();
  80  |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  81  |     await this.enterCouponCodeInput.click();
  82  |     await this.enterCouponCodeInput.fill(couponCode);
  83  |     await this.pinInput.click();
  84  |     await this.pinInput.fill(pin);
  85  |     await this.redeemCodeBtn.click();
  86  |     // Wait for success toast
  87  |     await this.page.getByText('Coupon redeemed successfully')
  88  |       .waitFor({ state: 'visible', timeout: 15000 });
  89  |   }
  90  | 
  91  |   // ── Get a coupon row from the list by coupon code ─────────────
  92  |   async getCouponRow(couponCode) {
  93  |     const row = this.page.getByRole('cell', { name: couponCode }).locator('..');
  94  |     await row.waitFor({ state: 'visible', timeout: 15000 });
  95  |     return row;
  96  |   }
  97  | 
  98  |   // ── Get status of a coupon from the list ─────────────────────
  99  |   // Codegen: status is in #cell-7-{rowId} — we find it via the coupon code cell
  100 |   async getCouponStatus(couponCode) {
  101 |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  102 |     await codeCell.waitFor({ state: 'visible', timeout: 15000 });
  103 |     const row = this.page.getByRole('row').filter({ has: codeCell });
  104 |     const text = await row.textContent();
  105 |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  106 |     if (/OPEN/i.test(text)) return 'OPEN';
  107 |     return null;
  108 |   }
  109 | 
  110 |   // ── Get redeemed-by name from the coupon row ──────────────────
  111 |   async getCouponRedeemedBy(couponCode) {
  112 |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  113 |     const row = this.page.getByRole('row').filter({ has: codeCell });
  114 |     const text = await row.textContent();
  115 |     // Redeemed by is a name — extract non-code, non-status, non-date text
  116 |     const match = text?.match(/[A-Z][a-z]+ [A-Z][a-z]+/);
  117 |     return match?.[0] ?? null;
  118 |   }
  119 | }
  120 | 
  121 | module.exports = { CouponsPage };
```