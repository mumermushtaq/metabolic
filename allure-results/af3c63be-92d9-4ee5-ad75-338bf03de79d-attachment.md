# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\health-info.spec.js >> Health Info >> adds clinician feedback on Food entry
- Location: tests\e2e\health-info.spec.js:79:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add feedback' }).first()

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
        - img [ref=e45]
      - generic [ref=e48]:
        - generic [ref=e49]:
          - button "notification" [ref=e50] [cursor=pointer]:
            - img "notification" [ref=e51]
          - generic: "0"
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e59] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e60]
            - generic [ref=e61]: Admin • Diabetologist
    - generic [ref=e62]:
      - list [ref=e65]:
        - link "Patient Info" [ref=e66] [cursor=pointer]:
          - /url: /patient/profile/1705
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/1705
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1705
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/1705
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1705
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1705
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1705
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1705
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1705
          - listitem [ref=e83]: GLP-1 Protocol
      - generic [ref=e84]:
        - generic [ref=e85]:
          - heading "Latest Updates" [level=3] [ref=e86]
          - button [ref=e87] [cursor=pointer]:
            - img [ref=e88]
        - generic [ref=e90]:
          - generic [ref=e91] [cursor=pointer]:
            - generic [ref=e92]:
              - heading "Blood Pressure" [level=6] [ref=e93]
              - img [ref=e94]
            - main [ref=e96]:
              - heading "120/80 mg/hg" [level=4] [ref=e97]:
                - text: 120/80
                - generic [ref=e98]: mg/hg
              - paragraph [ref=e99]: Manual
            - generic [ref=e100]:
              - paragraph [ref=e101]: Today
              - paragraph [ref=e102]:
                - img [ref=e104]
                - text: Insufficient Data
          - generic [ref=e108] [cursor=pointer]:
            - generic [ref=e109]:
              - heading "Glucose" [level=6] [ref=e110]
              - img [ref=e111]
            - main [ref=e113]:
              - heading "80 mg/dL" [level=4] [ref=e114]:
                - text: "80"
                - generic [ref=e115]: mg/dL
              - paragraph [ref=e116]: Manual
            - generic [ref=e117]:
              - paragraph [ref=e118]: Today, average
              - paragraph [ref=e119]:
                - img [ref=e121]
                - text: Insufficient Data
          - generic [ref=e125] [cursor=pointer]:
            - generic [ref=e126]:
              - heading "Heart Rate" [level=6] [ref=e127]
              - img [ref=e128]
            - main [ref=e130]:
              - heading "-- BPM" [level=4] [ref=e131]:
                - text: "--"
                - generic [ref=e132]: BPM
              - paragraph [ref=e133]: "--"
            - generic [ref=e134]:
              - paragraph [ref=e135]: "--"
              - paragraph [ref=e136]:
                - img [ref=e138]
                - text: Insufficient Data
          - generic [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - heading "Insulin" [level=6] [ref=e144]
              - img [ref=e145]
            - main [ref=e147]:
              - heading "--" [level=4] [ref=e148]
              - paragraph
            - generic [ref=e149]:
              - paragraph [ref=e150]: "--"
              - paragraph [ref=e151]:
                - img [ref=e153]
                - text: Insufficient Data
          - generic [ref=e157] [cursor=pointer]:
            - heading "Time in Range" [level=6] [ref=e159]
            - main [ref=e160]:
              - heading "-- %" [level=4] [ref=e161]:
                - text: "--"
                - generic [ref=e162]: "%"
            - generic [ref=e163]:
              - paragraph [ref=e164]: "--"
              - paragraph [ref=e165]: Insufficient data
          - generic [ref=e166] [cursor=pointer]:
            - generic [ref=e167]:
              - heading "Activity" [level=6] [ref=e168]
              - img [ref=e169]
            - main [ref=e171]:
              - heading "1 hrs 0 mins" [level=4] [ref=e172]
              - paragraph [ref=e173]: Manual
            - generic [ref=e174]:
              - paragraph [ref=e175]: Today
              - paragraph [ref=e176]:
                - img [ref=e178]
                - text: Insufficient Data
          - generic [ref=e182] [cursor=pointer]:
            - generic [ref=e183]:
              - heading "Steps" [level=6] [ref=e184]
              - img [ref=e185]
            - main [ref=e187]:
              - heading "--" [level=4] [ref=e188]
              - paragraph
            - generic [ref=e189]:
              - paragraph [ref=e190]: "--"
              - paragraph [ref=e191]:
                - img [ref=e193]
                - text: Insufficient Data
          - generic [ref=e197] [cursor=pointer]:
            - generic [ref=e198]:
              - heading "Alcohol" [level=6] [ref=e199]
              - img [ref=e200]
            - main [ref=e202]:
              - heading "900 ml" [level=4] [ref=e203]:
                - text: "900"
                - generic [ref=e204]: ml
              - paragraph [ref=e205]: Manual
            - generic [ref=e206]:
              - paragraph [ref=e207]: Today
              - paragraph [ref=e208]:
                - img [ref=e210]
                - text: Insufficient Data
          - generic [ref=e214] [cursor=pointer]:
            - generic [ref=e215]:
              - heading "Food" [level=6] [ref=e216]
              - img [ref=e217]
            - main [ref=e219]:
              - heading "2605 calories" [level=4] [ref=e220]:
                - text: "2605"
                - generic [ref=e221]: calories
              - paragraph
            - generic [ref=e222]:
              - paragraph [ref=e223]: Today
              - paragraph [ref=e224]:
                - img [ref=e226]
                - text: Insufficient Data
          - generic [ref=e230] [cursor=pointer]:
            - generic [ref=e231]:
              - heading "Hydration" [level=6] [ref=e232]
              - img [ref=e233]
            - main [ref=e235]:
              - heading "1000 ml" [level=4] [ref=e236]:
                - text: "1000"
                - generic [ref=e237]: ml
              - paragraph [ref=e238]: Manual
            - generic [ref=e239]:
              - paragraph [ref=e240]: Today
              - paragraph [ref=e241]:
                - img [ref=e243]
                - text: Insufficient Data
          - generic [ref=e247] [cursor=pointer]:
            - generic [ref=e248]:
              - heading "Sleep" [level=6] [ref=e249]
              - img [ref=e250]
            - main [ref=e252]:
              - heading "--" [level=4] [ref=e253]
              - paragraph
            - generic [ref=e254]:
              - paragraph [ref=e255]: "--"
              - paragraph [ref=e256]:
                - img [ref=e258]
                - text: Insufficient Data
          - generic [ref=e262] [cursor=pointer]:
            - generic [ref=e263]:
              - heading "Smoking" [level=6] [ref=e264]
              - img [ref=e265]
            - main [ref=e267]:
              - heading "5" [level=4] [ref=e268]
              - paragraph [ref=e269]: Manual
            - generic [ref=e270]:
              - paragraph [ref=e271]: Today
              - paragraph [ref=e272]:
                - img [ref=e274]
                - text: Insufficient Data
          - generic [ref=e278] [cursor=pointer]:
            - generic [ref=e279]:
              - heading "Stress" [level=6] [ref=e280]
              - img [ref=e281]
            - main [ref=e283]:
              - heading "--" [level=4] [ref=e284]
              - paragraph
            - generic [ref=e285]:
              - paragraph [ref=e286]: "--"
              - paragraph [ref=e287]:
                - img [ref=e289]
                - text: Insufficient Data
          - generic [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - heading "Weight" [level=6] [ref=e295]
              - img [ref=e296]
            - main [ref=e298]:
              - heading "100 kg" [level=4] [ref=e299]:
                - text: "100"
                - generic [ref=e300]: kg
            - generic [ref=e301]:
              - paragraph [ref=e302]: Today
              - paragraph [ref=e303]: Insufficient data
          - generic [ref=e304] [cursor=pointer]:
            - generic [ref=e305]:
              - heading "Body Fat %" [level=6] [ref=e306]
              - img [ref=e307]
            - main [ref=e309]:
              - heading "-- %" [level=4] [ref=e310]:
                - text: "--"
                - generic [ref=e311]: "%"
              - paragraph
            - generic [ref=e312]:
              - paragraph [ref=e313]: "--"
              - paragraph [ref=e314]:
                - img [ref=e316]
                - generic [ref=e320]: "--%"
          - generic [ref=e321] [cursor=pointer]:
            - generic [ref=e322]:
              - heading "Lean Mass %" [level=6] [ref=e323]
              - img [ref=e324]
            - main [ref=e326]:
              - heading "-- %" [level=4] [ref=e327]:
                - text: "--"
                - generic [ref=e328]: "%"
              - paragraph
            - generic [ref=e329]:
              - paragraph [ref=e330]: "--"
              - paragraph [ref=e331]:
                - img [ref=e333]
                - generic [ref=e337]: "--%"
          - generic [ref=e338] [cursor=pointer]:
            - generic [ref=e339]:
              - heading "Fat Mass" [level=6] [ref=e340]
              - img [ref=e341]
            - main [ref=e343]:
              - heading "-- kg" [level=4] [ref=e344]:
                - text: "--"
                - generic [ref=e345]: kg
              - paragraph
            - generic [ref=e346]:
              - paragraph [ref=e347]: "--"
              - paragraph [ref=e348]:
                - img [ref=e350]
                - generic [ref=e354]: "--%"
          - generic [ref=e355] [cursor=pointer]:
            - generic [ref=e356]:
              - heading "Lean Mass" [level=6] [ref=e357]
              - img [ref=e358]
            - main [ref=e360]:
              - heading "-- kg" [level=4] [ref=e361]:
                - text: "--"
                - generic [ref=e362]: kg
              - paragraph
            - generic [ref=e363]:
              - paragraph [ref=e364]: "--"
              - paragraph [ref=e365]:
                - img [ref=e367]
                - generic [ref=e371]: "--%"
          - generic [ref=e372] [cursor=pointer]:
            - generic [ref=e373]:
              - heading "Visceral Fat %" [level=6] [ref=e374]
              - img [ref=e375]
            - main [ref=e377]:
              - heading "-- %" [level=4] [ref=e378]:
                - text: "--"
                - generic [ref=e379]: "%"
              - paragraph
            - generic [ref=e380]:
              - paragraph [ref=e381]: "--"
              - paragraph [ref=e382]:
                - img [ref=e384]
                - generic [ref=e388]: "--%"
          - generic [ref=e389] [cursor=pointer]:
            - generic [ref=e390]:
              - heading "Visceral Fat Mass" [level=6] [ref=e391]
              - img [ref=e392]
            - main [ref=e394]:
              - heading "-- kg" [level=4] [ref=e395]:
                - text: "--"
                - generic [ref=e396]: kg
              - paragraph
            - generic [ref=e397]:
              - paragraph [ref=e398]: "--"
              - paragraph [ref=e399]:
                - img [ref=e401]
                - generic [ref=e405]: "--%"
          - generic [ref=e406] [cursor=pointer]:
            - generic [ref=e407]:
              - heading "Basal Metabolic Rate" [level=6] [ref=e408]
              - img [ref=e409]
            - main [ref=e411]:
              - heading "--" [level=4] [ref=e412]
              - paragraph
            - generic [ref=e413]:
              - paragraph [ref=e414]: "--"
              - paragraph [ref=e415]:
                - img [ref=e417]
                - generic [ref=e421]: "--%"
          - generic [ref=e422] [cursor=pointer]:
            - generic [ref=e423]:
              - heading "Body Roundness Index (BRI)" [level=6] [ref=e424]
              - img [ref=e425]
            - main [ref=e427]:
              - heading "--" [level=4] [ref=e428]
              - paragraph
            - generic [ref=e429]:
              - paragraph [ref=e430]: "--"
              - paragraph [ref=e431]:
                - img [ref=e433]
                - generic [ref=e437]: "--%"
          - generic [ref=e438] [cursor=pointer]:
            - generic [ref=e439]:
              - heading "Predicted BMI" [level=6] [ref=e440]
              - img [ref=e441]
            - main [ref=e443]:
              - heading "--" [level=4] [ref=e444]
              - paragraph
            - generic [ref=e445]:
              - paragraph [ref=e446]: "--"
              - paragraph [ref=e447]:
                - img [ref=e449]
                - generic [ref=e453]: "--%"
          - generic [ref=e454] [cursor=pointer]:
            - generic [ref=e455]:
              - heading "BMI Confidence Score" [level=6] [ref=e456]
              - img [ref=e457]
            - main [ref=e459]:
              - heading "--" [level=4] [ref=e460]
              - paragraph
            - generic [ref=e461]:
              - paragraph [ref=e462]: "--"
              - paragraph [ref=e463]:
                - img [ref=e465]
                - generic [ref=e469]: "--%"
          - generic [ref=e470] [cursor=pointer]:
            - generic [ref=e471]:
              - heading "Waist-To-Hip ratio" [level=6] [ref=e472]
              - img [ref=e473]
            - main [ref=e475]:
              - heading "--" [level=4] [ref=e476]
              - paragraph
            - generic [ref=e477]:
              - paragraph [ref=e478]: "--"
              - paragraph [ref=e479]:
                - img [ref=e481]
                - generic [ref=e485]: "--%"
          - generic [ref=e486] [cursor=pointer]:
            - generic [ref=e487]:
              - heading "Waist-to-Height ratio" [level=6] [ref=e488]
              - img [ref=e489]
            - main [ref=e491]:
              - heading "--" [level=4] [ref=e492]
              - paragraph
            - generic [ref=e493]:
              - paragraph [ref=e494]: "--"
              - paragraph [ref=e495]:
                - img [ref=e497]
                - generic [ref=e501]: "--%"
          - generic [ref=e502] [cursor=pointer]:
            - generic [ref=e503]:
              - heading "Full Body Volume" [level=6] [ref=e504]
              - img [ref=e505]
            - main [ref=e507]:
              - heading "-- m³" [level=4] [ref=e508]:
                - text: "--"
                - generic [ref=e509]: m³
              - paragraph
            - generic [ref=e510]:
              - paragraph [ref=e511]: "--"
              - paragraph [ref=e512]:
                - img [ref=e514]
                - generic [ref=e518]: "--%"
          - generic [ref=e519] [cursor=pointer]:
            - generic [ref=e520]:
              - heading "Neck" [level=6] [ref=e521]
              - img [ref=e522]
            - main [ref=e524]:
              - heading "-- cm" [level=4] [ref=e525]:
                - text: "--"
                - generic [ref=e526]: cm
              - paragraph
            - generic [ref=e527]:
              - paragraph [ref=e528]: "--"
              - paragraph [ref=e529]:
                - img [ref=e531]
                - generic [ref=e535]: "--%"
          - generic [ref=e536] [cursor=pointer]:
            - generic [ref=e537]:
              - heading "Shoulders" [level=6] [ref=e538]
              - img [ref=e539]
            - main [ref=e541]:
              - heading "-- cm" [level=4] [ref=e542]:
                - text: "--"
                - generic [ref=e543]: cm
              - paragraph
            - generic [ref=e544]:
              - paragraph [ref=e545]: "--"
              - paragraph [ref=e546]:
                - img [ref=e548]
                - generic [ref=e552]: "--%"
          - generic [ref=e553] [cursor=pointer]:
            - generic [ref=e554]:
              - heading "Upper Chest" [level=6] [ref=e555]
              - img [ref=e556]
            - main [ref=e558]:
              - heading "-- cm" [level=4] [ref=e559]:
                - text: "--"
                - generic [ref=e560]: cm
              - paragraph
            - generic [ref=e561]:
              - paragraph [ref=e562]: "--"
              - paragraph [ref=e563]:
                - img [ref=e565]
                - generic [ref=e569]: "--%"
          - generic [ref=e570] [cursor=pointer]:
            - generic [ref=e571]:
              - heading "Chest" [level=6] [ref=e572]
              - img [ref=e573]
            - main [ref=e575]:
              - heading "-- cm" [level=4] [ref=e576]:
                - text: "--"
                - generic [ref=e577]: cm
              - paragraph
            - generic [ref=e578]:
              - paragraph [ref=e579]: "--"
              - paragraph [ref=e580]:
                - img [ref=e582]
                - generic [ref=e586]: "--%"
          - generic [ref=e587] [cursor=pointer]:
            - generic [ref=e588]:
              - heading "Waist" [level=6] [ref=e589]
              - img [ref=e590]
            - main [ref=e592]:
              - heading "-- cm" [level=4] [ref=e593]:
                - text: "--"
                - generic [ref=e594]: cm
              - paragraph
            - generic [ref=e595]:
              - paragraph [ref=e596]: "--"
              - paragraph [ref=e597]:
                - img [ref=e599]
                - generic [ref=e603]: "--%"
          - generic [ref=e604] [cursor=pointer]:
            - generic [ref=e605]:
              - heading "Low Waist / Stomach" [level=6] [ref=e606]
              - img [ref=e607]
            - main [ref=e609]:
              - heading "-- cm" [level=4] [ref=e610]:
                - text: "--"
                - generic [ref=e611]: cm
              - paragraph
            - generic [ref=e612]:
              - paragraph [ref=e613]: "--"
              - paragraph [ref=e614]:
                - img [ref=e616]
                - generic [ref=e620]: "--%"
          - generic [ref=e621] [cursor=pointer]:
            - generic [ref=e622]:
              - heading "Hips" [level=6] [ref=e623]
              - img [ref=e624]
            - main [ref=e626]:
              - heading "-- cm" [level=4] [ref=e627]:
                - text: "--"
                - generic [ref=e628]: cm
              - paragraph
            - generic [ref=e629]:
              - paragraph [ref=e630]: "--"
              - paragraph [ref=e631]:
                - img [ref=e633]
                - generic [ref=e637]: "--%"
          - generic [ref=e638] [cursor=pointer]:
            - generic [ref=e639]:
              - heading "Left Mid Arm" [level=6] [ref=e640]
              - img [ref=e641]
            - main [ref=e643]:
              - heading "-- cm" [level=4] [ref=e644]:
                - text: "--"
                - generic [ref=e645]: cm
              - paragraph
            - generic [ref=e646]:
              - paragraph [ref=e647]: "--"
              - paragraph [ref=e648]:
                - img [ref=e650]
                - generic [ref=e654]: "--%"
          - generic [ref=e655] [cursor=pointer]:
            - generic [ref=e656]:
              - heading "Right Mid Arm" [level=6] [ref=e657]
              - img [ref=e658]
            - main [ref=e660]:
              - heading "-- cm" [level=4] [ref=e661]:
                - text: "--"
                - generic [ref=e662]: cm
              - paragraph
            - generic [ref=e663]:
              - paragraph [ref=e664]: "--"
              - paragraph [ref=e665]:
                - img [ref=e667]
                - generic [ref=e671]: "--%"
          - generic [ref=e672] [cursor=pointer]:
            - generic [ref=e673]:
              - heading "Left Forearm" [level=6] [ref=e674]
              - img [ref=e675]
            - main [ref=e677]:
              - heading "-- cm" [level=4] [ref=e678]:
                - text: "--"
                - generic [ref=e679]: cm
              - paragraph
            - generic [ref=e680]:
              - paragraph [ref=e681]: "--"
              - paragraph [ref=e682]:
                - img [ref=e684]
                - generic [ref=e688]: "--%"
          - generic [ref=e689] [cursor=pointer]:
            - generic [ref=e690]:
              - heading "Right Forearm" [level=6] [ref=e691]
              - img [ref=e692]
            - main [ref=e694]:
              - heading "-- cm" [level=4] [ref=e695]:
                - text: "--"
                - generic [ref=e696]: cm
              - paragraph
            - generic [ref=e697]:
              - paragraph [ref=e698]: "--"
              - paragraph [ref=e699]:
                - img [ref=e701]
                - generic [ref=e705]: "--%"
          - generic [ref=e706] [cursor=pointer]:
            - generic [ref=e707]:
              - heading "Left Wrist" [level=6] [ref=e708]
              - img [ref=e709]
            - main [ref=e711]:
              - heading "-- cm" [level=4] [ref=e712]:
                - text: "--"
                - generic [ref=e713]: cm
              - paragraph
            - generic [ref=e714]:
              - paragraph [ref=e715]: "--"
              - paragraph [ref=e716]:
                - img [ref=e718]
                - generic [ref=e722]: "--%"
          - generic [ref=e723] [cursor=pointer]:
            - generic [ref=e724]:
              - heading "Right Wrist" [level=6] [ref=e725]
              - img [ref=e726]
            - main [ref=e728]:
              - heading "-- cm" [level=4] [ref=e729]:
                - text: "--"
                - generic [ref=e730]: cm
              - paragraph
            - generic [ref=e731]:
              - paragraph [ref=e732]: "--"
              - paragraph [ref=e733]:
                - img [ref=e735]
                - generic [ref=e739]: "--%"
          - generic [ref=e740] [cursor=pointer]:
            - generic [ref=e741]:
              - heading "Left Thigh" [level=6] [ref=e742]
              - img [ref=e743]
            - main [ref=e745]:
              - heading "-- cm" [level=4] [ref=e746]:
                - text: "--"
                - generic [ref=e747]: cm
              - paragraph
            - generic [ref=e748]:
              - paragraph [ref=e749]: "--"
              - paragraph [ref=e750]:
                - img [ref=e752]
                - generic [ref=e756]: "--%"
          - generic [ref=e757] [cursor=pointer]:
            - generic [ref=e758]:
              - heading "Right Thigh" [level=6] [ref=e759]
              - img [ref=e760]
            - main [ref=e762]:
              - heading "-- cm" [level=4] [ref=e763]:
                - text: "--"
                - generic [ref=e764]: cm
              - paragraph
            - generic [ref=e765]:
              - paragraph [ref=e766]: "--"
              - paragraph [ref=e767]:
                - img [ref=e769]
                - generic [ref=e773]: "--%"
          - generic [ref=e774] [cursor=pointer]:
            - generic [ref=e775]:
              - heading "Lower Left Thigh" [level=6] [ref=e776]
              - img [ref=e777]
            - main [ref=e779]:
              - heading "-- cm" [level=4] [ref=e780]:
                - text: "--"
                - generic [ref=e781]: cm
              - paragraph
            - generic [ref=e782]:
              - paragraph [ref=e783]: "--"
              - paragraph [ref=e784]:
                - img [ref=e786]
                - generic [ref=e790]: "--%"
          - generic [ref=e791] [cursor=pointer]:
            - generic [ref=e792]:
              - heading "Lower Right Thigh" [level=6] [ref=e793]
              - img [ref=e794]
            - main [ref=e796]:
              - heading "-- cm" [level=4] [ref=e797]:
                - text: "--"
                - generic [ref=e798]: cm
              - paragraph
            - generic [ref=e799]:
              - paragraph [ref=e800]: "--"
              - paragraph [ref=e801]:
                - img [ref=e803]
                - generic [ref=e807]: "--%"
          - generic [ref=e808] [cursor=pointer]:
            - generic [ref=e809]:
              - heading "Left Calf" [level=6] [ref=e810]
              - img [ref=e811]
            - main [ref=e813]:
              - heading "-- cm" [level=4] [ref=e814]:
                - text: "--"
                - generic [ref=e815]: cm
              - paragraph
            - generic [ref=e816]:
              - paragraph [ref=e817]: "--"
              - paragraph [ref=e818]:
                - img [ref=e820]
                - generic [ref=e824]: "--%"
          - generic [ref=e825] [cursor=pointer]:
            - generic [ref=e826]:
              - heading "Right Calf" [level=6] [ref=e827]
              - img [ref=e828]
            - main [ref=e830]:
              - heading "-- cm" [level=4] [ref=e831]:
                - text: "--"
                - generic [ref=e832]: cm
              - paragraph
            - generic [ref=e833]:
              - paragraph [ref=e834]: "--"
              - paragraph [ref=e835]:
                - img [ref=e837]
                - generic [ref=e841]: "--%"
      - generic [ref=e842]:
        - generic [ref=e843]:
          - generic [ref=e844]:
            - heading "Compare" [level=3] [ref=e845]
            - paragraph [ref=e846]: Select a metric to get started.
          - generic [ref=e847]:
            - textbox "Find a metric" [ref=e848]
            - img [ref=e849]
          - button "Deselect All" [ref=e851] [cursor=pointer]
          - generic [ref=e852]:
            - generic [ref=e853]:
              - generic [ref=e854] [cursor=pointer]:
                - generic [ref=e855]: Health
                - img [ref=e856]
              - list [ref=e858]:
                - listitem [ref=e859]:
                  - generic [ref=e860] [cursor=pointer]:
                    - checkbox "Blood Pressure" [ref=e861]
                    - generic [ref=e863]: Blood Pressure
                - listitem [ref=e864]:
                  - generic [ref=e865] [cursor=pointer]:
                    - checkbox "Glucose" [ref=e866]
                    - generic [ref=e868]: Glucose
                - listitem [ref=e869]:
                  - generic [ref=e870] [cursor=pointer]:
                    - checkbox "Heart Rate" [ref=e871]
                    - generic [ref=e873]: Heart Rate
                - listitem [ref=e874]:
                  - generic [ref=e875] [cursor=pointer]:
                    - checkbox "Insulin" [ref=e876]
                    - generic [ref=e878]: Insulin
                - listitem [ref=e879]:
                  - generic [ref=e880] [cursor=pointer]:
                    - checkbox "Time In Range" [ref=e881]
                    - generic [ref=e883]: Time In Range
            - generic [ref=e884]:
              - generic [ref=e885] [cursor=pointer]:
                - generic [ref=e886]: Fitness
                - img [ref=e887]
              - list [ref=e889]:
                - listitem [ref=e890]:
                  - generic [ref=e891] [cursor=pointer]:
                    - checkbox "Activity" [ref=e892]
                    - generic [ref=e894]: Activity
                - listitem [ref=e895]:
                  - generic [ref=e896] [cursor=pointer]:
                    - checkbox "Steps" [ref=e897]
                    - generic [ref=e899]: Steps
            - generic [ref=e900]:
              - generic [ref=e901] [cursor=pointer]:
                - generic [ref=e902]: Lifestyle
                - img [ref=e903]
              - list [ref=e905]:
                - listitem [ref=e906]:
                  - generic [ref=e907] [cursor=pointer]:
                    - checkbox "Alcohol" [ref=e908]
                    - generic [ref=e910]: Alcohol
                - listitem [ref=e911]:
                  - generic [ref=e912] [cursor=pointer]:
                    - checkbox "Food" [ref=e913]
                    - generic [ref=e915]: Food
                - listitem [ref=e916]:
                  - generic [ref=e917] [cursor=pointer]:
                    - checkbox "Hydration" [ref=e918]
                    - generic [ref=e920]: Hydration
                - listitem [ref=e921]:
                  - generic [ref=e922] [cursor=pointer]:
                    - checkbox "Sleep" [ref=e923]
                    - generic [ref=e925]: Sleep
                - listitem [ref=e926]:
                  - generic [ref=e927] [cursor=pointer]:
                    - checkbox "Smoking" [ref=e928]
                    - generic [ref=e930]: Smoking
                - listitem [ref=e931]:
                  - generic [ref=e932] [cursor=pointer]:
                    - checkbox "Stress" [ref=e933]
                    - generic [ref=e935]: Stress
                - listitem [ref=e936]:
                  - generic [ref=e937] [cursor=pointer]:
                    - checkbox "Weight" [ref=e938]
                    - generic [ref=e940]: Weight
            - generic [ref=e941]:
              - generic [ref=e942] [cursor=pointer]:
                - generic [ref=e943]: Body Composition Analysis
                - img [ref=e944]
              - list [ref=e946]:
                - listitem [ref=e947]:
                  - generic [ref=e948] [cursor=pointer]:
                    - checkbox "Body Fat %" [ref=e949]
                    - generic [ref=e951]: Body Fat %
                - listitem [ref=e952]:
                  - generic [ref=e953] [cursor=pointer]:
                    - checkbox "Lean Mass %" [ref=e954]
                    - generic [ref=e956]: Lean Mass %
                - listitem [ref=e957]:
                  - generic [ref=e958] [cursor=pointer]:
                    - checkbox "Fat Mass" [ref=e959]
                    - generic [ref=e961]: Fat Mass
                - listitem [ref=e962]:
                  - generic [ref=e963] [cursor=pointer]:
                    - checkbox "Lean Mass" [ref=e964]
                    - generic [ref=e966]: Lean Mass
                - listitem [ref=e967]:
                  - generic [ref=e968] [cursor=pointer]:
                    - checkbox "Visceral Fat %" [ref=e969]
                    - generic [ref=e971]: Visceral Fat %
                - listitem [ref=e972]:
                  - generic [ref=e973] [cursor=pointer]:
                    - checkbox "Visceral Fat Mass" [ref=e974]
                    - generic [ref=e976]: Visceral Fat Mass
                - listitem [ref=e977]:
                  - generic [ref=e978] [cursor=pointer]:
                    - checkbox "Basal Metabolic Rate" [ref=e979]
                    - generic [ref=e981]: Basal Metabolic Rate
                - listitem [ref=e982]:
                  - generic [ref=e983] [cursor=pointer]:
                    - checkbox "Body Roundness Index (BRI)" [ref=e984]
                    - generic [ref=e986]: Body Roundness Index (BRI)
                - listitem [ref=e987]:
                  - generic [ref=e988] [cursor=pointer]:
                    - checkbox "Predicted BMI" [ref=e989]
                    - generic [ref=e991]: Predicted BMI
                - listitem [ref=e992]:
                  - generic [ref=e993] [cursor=pointer]:
                    - checkbox "BMI Confidence Score" [ref=e994]
                    - generic [ref=e996]: BMI Confidence Score
                - listitem [ref=e997]:
                  - generic [ref=e998] [cursor=pointer]:
                    - checkbox "Waist-To-Hip ratio" [ref=e999]
                    - generic [ref=e1001]: Waist-To-Hip ratio
                - listitem [ref=e1002]:
                  - generic [ref=e1003] [cursor=pointer]:
                    - checkbox "Waist-to-Height ratio" [ref=e1004]
                    - generic [ref=e1006]: Waist-to-Height ratio
                - listitem [ref=e1007]:
                  - generic [ref=e1008] [cursor=pointer]:
                    - checkbox "Full Body Volume" [ref=e1009]
                    - generic [ref=e1011]: Full Body Volume
                - listitem [ref=e1012]:
                  - generic [ref=e1013] [cursor=pointer]:
                    - checkbox "Neck" [ref=e1014]
                    - generic [ref=e1016]: Neck
                - listitem [ref=e1017]:
                  - generic [ref=e1018] [cursor=pointer]:
                    - checkbox "Shoulders" [ref=e1019]
                    - generic [ref=e1021]: Shoulders
                - listitem [ref=e1022]:
                  - generic [ref=e1023] [cursor=pointer]:
                    - checkbox "Upper Chest" [ref=e1024]
                    - generic [ref=e1026]: Upper Chest
                - listitem [ref=e1027]:
                  - generic [ref=e1028] [cursor=pointer]:
                    - checkbox "Chest" [ref=e1029]
                    - generic [ref=e1031]: Chest
                - listitem [ref=e1032]:
                  - generic [ref=e1033] [cursor=pointer]:
                    - checkbox "Waist" [ref=e1034]
                    - generic [ref=e1036]: Waist
                - listitem [ref=e1037]:
                  - generic [ref=e1038] [cursor=pointer]:
                    - checkbox "Low Waist / Stomach" [ref=e1039]
                    - generic [ref=e1041]: Low Waist / Stomach
                - listitem [ref=e1042]:
                  - generic [ref=e1043] [cursor=pointer]:
                    - checkbox "Hips" [ref=e1044]
                    - generic [ref=e1046]: Hips
                - listitem [ref=e1047]:
                  - generic [ref=e1048] [cursor=pointer]:
                    - checkbox "Left Mid Arm" [ref=e1049]
                    - generic [ref=e1051]: Left Mid Arm
                - listitem [ref=e1052]:
                  - generic [ref=e1053] [cursor=pointer]:
                    - checkbox "Right Mid Arm" [ref=e1054]
                    - generic [ref=e1056]: Right Mid Arm
                - listitem [ref=e1057]:
                  - generic [ref=e1058] [cursor=pointer]:
                    - checkbox "Left Forearm" [ref=e1059]
                    - generic [ref=e1061]: Left Forearm
                - listitem [ref=e1062]:
                  - generic [ref=e1063] [cursor=pointer]:
                    - checkbox "Right Forearm" [ref=e1064]
                    - generic [ref=e1066]: Right Forearm
                - listitem [ref=e1067]:
                  - generic [ref=e1068] [cursor=pointer]:
                    - checkbox "Left Wrist" [ref=e1069]
                    - generic [ref=e1071]: Left Wrist
                - listitem [ref=e1072]:
                  - generic [ref=e1073] [cursor=pointer]:
                    - checkbox "Right Wrist" [ref=e1074]
                    - generic [ref=e1076]: Right Wrist
                - listitem [ref=e1077]:
                  - generic [ref=e1078] [cursor=pointer]:
                    - checkbox "Left Thigh" [ref=e1079]
                    - generic [ref=e1081]: Left Thigh
                - listitem [ref=e1082]:
                  - generic [ref=e1083] [cursor=pointer]:
                    - checkbox "Right Thigh" [ref=e1084]
                    - generic [ref=e1086]: Right Thigh
                - listitem [ref=e1087]:
                  - generic [ref=e1088] [cursor=pointer]:
                    - checkbox "Lower Left Thigh" [ref=e1089]
                    - generic [ref=e1091]: Lower Left Thigh
                - listitem [ref=e1092]:
                  - generic [ref=e1093] [cursor=pointer]:
                    - checkbox "Lower Right Thigh" [ref=e1094]
                    - generic [ref=e1096]: Lower Right Thigh
                - listitem [ref=e1097]:
                  - generic [ref=e1098] [cursor=pointer]:
                    - checkbox "Left Calf" [ref=e1099]
                    - generic [ref=e1101]: Left Calf
                - listitem [ref=e1102]:
                  - generic [ref=e1103] [cursor=pointer]:
                    - checkbox "Right Calf" [ref=e1104]
                    - generic [ref=e1106]: Right Calf
        - generic [ref=e1107]:
          - generic [ref=e1108]:
            - heading "Metrics Comparison" [level=2] [ref=e1109]
            - generic [ref=e1111]:
              - paragraph [ref=e1112]: Zoom
              - button "1d" [ref=e1113] [cursor=pointer]
              - button "1w" [ref=e1114] [cursor=pointer]
              - button "1m" [ref=e1115] [cursor=pointer]
              - button "3m" [ref=e1116] [cursor=pointer]
              - button "6m" [ref=e1117] [cursor=pointer]
              - button "YTD" [ref=e1118] [cursor=pointer]
              - button "1y" [ref=e1119] [cursor=pointer]
              - button "ALL" [ref=e1120] [cursor=pointer]
          - img [ref=e1124]:
            - generic [ref=e1141]:
              - generic [ref=e1142]: 26 Jun
              - generic [ref=e1143]: 27 Jun
              - generic [ref=e1144]: 28 Jun
              - generic [ref=e1145]: 29 Jun
              - generic [ref=e1146]: 30 Jun
      - generic [ref=e1152]:
        - generic [ref=e1153]:
          - paragraph [ref=e1155]: Chat
          - button "delete" [ref=e1156] [cursor=pointer]:
            - img [ref=e1157]
        - generic [ref=e1161]:
          - paragraph [ref=e1162] [cursor=pointer]: Metabolic
          - paragraph [ref=e1163] [cursor=pointer]: Zone
  - alert [ref=e1164]
```

# Test source

```ts
  22  |     this.feedbackInput    = page.getByRole('textbox', { name: 'Add your feedback for the' });
  23  |     this.saveShareBtn     = page.getByRole('button', { name: 'Save & Share with Patient' });
  24  | 
  25  |     // ── Chart filters ─────────────────────────────────────────────
  26  |     this.bloodPressureCheckbox = page.getByRole('checkbox', { name: 'Blood Pressure' });
  27  |     this.activityCheckbox      = page.getByRole('checkbox', { name: 'Activity' });
  28  | 
  29  |     // ── Time range buttons ──────────────────────────────────────────
  30  |     this.range1d  = page.getByRole('button', { name: '1d' });
  31  |     this.range1w  = page.getByRole('button', { name: '1w' });
  32  |     this.range1m  = page.getByRole('button', { name: '1m' });
  33  |     this.range6m  = page.getByRole('button', { name: '6m' });
  34  |     this.rangeYTD = page.getByRole('button', { name: 'YTD' });
  35  | 
  36  |     // ── Latest Updates section ─────────────────────────────────────
  37  |     this.latestUpdatesHeader = page.locator('header').filter({ hasText: 'Latest Updates' });
  38  |     this.selectAllCheckbox   = page.getByRole('checkbox', { name: 'Select All' });
  39  |     this.applyBtn            = page.getByRole('button', { name: 'Apply' });
  40  |   }
  41  | 
  42  |   // ── Navigate directly to Health Info tab ──────────────────────
  43  |   async openHealthInfoTab(patientId) {
  44  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/health-info/${patientId}`);
  45  |     await this.healthInfoTab.waitFor({ state: 'visible', timeout: 15000 });
  46  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  47  |   }
  48  | 
  49  |   // ── Returns true if a metric card has actual data (not "Insufficient Data") ──
  50  |   async metricHasData(metricLabel) {
  51  |     const card = this.page.locator('div').filter({ has: this.page.getByRole('heading', { name: metricLabel, exact: true }) }).first();
  52  |     const insufficientText = card.getByText(/Insufficient Data|Insufficient data/i);
  53  |     const isInsufficient = await insufficientText.isVisible({ timeout: 3000 }).catch(() => false);
  54  |     return !isInsufficient;
  55  |   }
  56  | 
  57  |   // ── Open a metric card's detail panel by partial label text ──
  58  |   // e.g. 'Blood Pressure', 'Activity', 'Weight', 'Food'
  59  |   // NOTE: clicking 'Glucose' navigates to a separate comparison view, not a detail panel
  60  |   async openMetricDetail(metricLabel) {
  61  |     const card = this.page.getByText(new RegExp(`^${metricLabel}`)).first();
  62  |     await card.waitFor({ state: 'visible', timeout: 10000 });
  63  |     await card.click();
  64  |     await this.page.waitForTimeout(500);
  65  |   }
  66  | 
  67  |   // ── Close the currently open metric detail panel ───────────────
  68  |   async closeMetricDetail() {
  69  |     // Try the explicit Close button first — most reliable
  70  |     const hasCloseBtn = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  71  |     if (hasCloseBtn) {
  72  |       await this.closeBtn.first().click().catch(() => {});
  73  |       return;
  74  |     }
  75  |     // Fallback: selected card's header icon toggles the panel closed
  76  |     const hasSelectedIcon = await this.metricCardHeaderIcon.first().isVisible({ timeout: 3000 }).catch(() => false);
  77  |     if (hasSelectedIcon) {
  78  |       await this.metricCardHeaderIcon.first().click().catch(() => {});
  79  |     }
  80  |   }
  81  | 
  82  |   // ── Edit food entry values ──────────────────────────────────────
  83  |   // values: { calories, carbs, protein, fat, sugar, fiber } — only fields you want to fill
  84  |   async editFoodEntry(values) {
  85  |     await this.editBtn.first().click();
  86  |     await this.page.waitForTimeout(500);
  87  | 
  88  |     const textboxes = this.page.getByRole('textbox');
  89  |     const fieldOrder = ['calories', 'carbs', 'protein', 'fat'];
  90  |     let idx = 2; // Codegen showed editable fields starting at index 2
  91  | 
  92  |     for (const field of fieldOrder) {
  93  |       if (values[field] !== undefined) {
  94  |         const box = textboxes.nth(idx);
  95  |         await box.click();
  96  |         // Clear existing value fully before typing the new one
  97  |         await box.fill('');
  98  |         await box.fill(String(values[field]));
  99  |       }
  100 |       idx++;
  101 |     }
  102 | 
  103 |     // Sugar and fiber use specific grid selectors
  104 |     if (values.sugar !== undefined) {
  105 |       const sugarInput = this.page.locator('.HistorySidebarRevamp_foodCardFormGrid__UQaR3 > div:nth-child(4) > input');
  106 |       await sugarInput.click();
  107 |       await sugarInput.fill('');
  108 |       await sugarInput.fill(String(values.sugar));
  109 |     }
  110 |     if (values.fiber !== undefined) {
  111 |       const fiberInput = this.page.locator('div:nth-child(5) > input');
  112 |       await fiberInput.click();
  113 |       await fiberInput.fill('');
  114 |       await fiberInput.fill(String(values.fiber));
  115 |     }
  116 | 
  117 |     await this.saveChangesBtn.click();
  118 |   }
  119 | 
  120 |   // ── Add clinician feedback on a food/activity entry ────────────
  121 |   async addFeedback({ rating = 'Good', tag = null, comment = '' }) {
> 122 |     await this.addFeedbackBtn.first().click();
      |                                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  123 | 
  124 |     if (rating) {
  125 |       await this.page.getByRole('button', { name: rating, exact: true }).click();
  126 |     }
  127 |     if (tag) {
  128 |       await this.page.getByRole('button', { name: tag }).click();
  129 |     }
  130 |     if (comment) {
  131 |       await this.feedbackInput.click();
  132 |       await this.feedbackInput.fill(comment);
  133 |     }
  134 | 
  135 |     await this.saveShareBtn.click();
  136 |     // Close confirmation if it appears
  137 |     const hasClose = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  138 |     if (hasClose) {
  139 |       await this.closeBtn.first().click();
  140 |     }
  141 |   }
  142 | 
  143 |   // ── Toggle a chart metric checkbox on/off in the Compare sidebar ──
  144 |   async toggleChartMetric(metricName, checked = true) {
  145 |     // Scope to the Compare panel's checkbox lists to avoid ambiguous matches
  146 |     const checkbox = this.page.locator('list').getByRole('checkbox', { name: metricName, exact: true }).first();
  147 |     const visible = await checkbox.isVisible({ timeout: 5000 }).catch(() => false);
  148 |     if (!visible) return;
  149 |     const isChecked = await checkbox.isChecked().catch(() => null);
  150 |     if (isChecked === checked) return; // already in desired state
  151 |     await checkbox.click({ force: true, timeout: 10000 }).catch(() => {});
  152 |   }
  153 | 
  154 |   // ── Select a time range for the chart ──────────────────────────
  155 |   // range: '1d' | '1w' | '1m' | '3m' | '6m' | 'YTD' | '1y' | 'ALL'
  156 |   async selectTimeRange(range) {
  157 |     const btn = this.page.getByRole('button', { name: range, exact: true });
  158 |     await btn.waitFor({ state: 'visible', timeout: 10000 });
  159 |     await btn.click();
  160 |     // Larger ranges (1m/3m/6m/YTD/1y/ALL) pull more data and re-render the chart —
  161 |     // give it time to settle before the next action
  162 |     if (['1m', '3m', '6m', 'YTD', '1y', 'ALL'].includes(range)) {
  163 |       await this.page.waitForTimeout(10000);
  164 |     }
  165 |   }
  166 | 
  167 |   // ── Open Latest Updates filter and select all + apply ──────────
  168 |   async applyLatestUpdatesFilter(selectAll = true) {
  169 |     const filterBtn = this.latestUpdatesHeader.getByRole('button');
  170 |     await filterBtn.click();
  171 | 
  172 |     if (selectAll) {
  173 |       await this.selectAllCheckbox.check();
  174 |     }
  175 | 
  176 |     await this.applyBtn.click();
  177 |   }
  178 | }
  179 | 
  180 | module.exports = { HealthInfoPage };
```