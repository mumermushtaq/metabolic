# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\health-info.spec.js >> Health Info >> adds clinician feedback on Food entry
- Location: tests\e2e\health-info.spec.js:73:3

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
          - /url: /patient/profile/1706
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/1706
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1706
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/1706
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1706
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1706
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1706
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1706
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1706
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
              - heading "-- mg/hg" [level=4] [ref=e97]:
                - text: "--"
                - generic [ref=e98]: mg/hg
              - paragraph [ref=e99]: "--"
            - generic [ref=e100]:
              - paragraph [ref=e101]: "--"
              - paragraph [ref=e102]:
                - img [ref=e104]
                - text: Insufficient Data
          - generic [ref=e108] [cursor=pointer]:
            - generic [ref=e109]:
              - heading "Glucose" [level=6] [ref=e110]
              - img [ref=e111]
            - main [ref=e113]:
              - heading "-- mg/dL" [level=4] [ref=e114]:
                - text: "--"
                - generic [ref=e115]: mg/dL
              - paragraph
            - generic [ref=e116]:
              - paragraph [ref=e117]: "--, average"
              - paragraph [ref=e118]:
                - img [ref=e120]
                - text: Insufficient Data
          - generic [ref=e124] [cursor=pointer]:
            - generic [ref=e125]:
              - heading "Heart Rate" [level=6] [ref=e126]
              - img [ref=e127]
            - main [ref=e129]:
              - heading "-- BPM" [level=4] [ref=e130]:
                - text: "--"
                - generic [ref=e131]: BPM
              - paragraph [ref=e132]: "--"
            - generic [ref=e133]:
              - paragraph [ref=e134]: "--"
              - paragraph [ref=e135]:
                - img [ref=e137]
                - text: Insufficient Data
          - generic [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - heading "Insulin" [level=6] [ref=e143]
              - img [ref=e144]
            - main [ref=e146]:
              - heading "--" [level=4] [ref=e147]
              - paragraph
            - generic [ref=e148]:
              - paragraph [ref=e149]: "--"
              - paragraph [ref=e150]:
                - img [ref=e152]
                - text: Insufficient Data
          - generic [ref=e156] [cursor=pointer]:
            - heading "Time in Range" [level=6] [ref=e158]
            - main [ref=e159]:
              - heading "-- %" [level=4] [ref=e160]:
                - text: "--"
                - generic [ref=e161]: "%"
            - generic [ref=e162]:
              - paragraph [ref=e163]: "--"
              - paragraph [ref=e164]: Insufficient data
          - generic [ref=e165] [cursor=pointer]:
            - generic [ref=e166]:
              - heading "Activity" [level=6] [ref=e167]
              - img [ref=e168]
            - main [ref=e170]:
              - heading "--" [level=4] [ref=e171]
              - paragraph
            - generic [ref=e172]:
              - paragraph [ref=e173]: "--"
              - paragraph [ref=e174]:
                - img [ref=e176]
                - text: Insufficient Data
          - generic [ref=e180] [cursor=pointer]:
            - generic [ref=e181]:
              - heading "Steps" [level=6] [ref=e182]
              - img [ref=e183]
            - main [ref=e185]:
              - heading "--" [level=4] [ref=e186]
              - paragraph
            - generic [ref=e187]:
              - paragraph [ref=e188]: "--"
              - paragraph [ref=e189]:
                - img [ref=e191]
                - text: Insufficient Data
          - generic [ref=e195] [cursor=pointer]:
            - generic [ref=e196]:
              - heading "Alcohol" [level=6] [ref=e197]
              - img [ref=e198]
            - main [ref=e200]:
              - heading "-- ml" [level=4] [ref=e201]:
                - text: "--"
                - generic [ref=e202]: ml
              - paragraph
            - generic [ref=e203]:
              - paragraph [ref=e204]: "--"
              - paragraph [ref=e205]:
                - img [ref=e207]
                - text: Insufficient Data
          - generic [ref=e211] [cursor=pointer]:
            - generic [ref=e212]:
              - heading "Food" [level=6] [ref=e213]
              - img [ref=e214]
            - main [ref=e216]:
              - heading "-- calories" [level=4] [ref=e217]:
                - text: "--"
                - generic [ref=e218]: calories
              - paragraph
            - generic [ref=e219]:
              - paragraph [ref=e220]: "--"
              - paragraph [ref=e221]:
                - img [ref=e223]
                - text: Insufficient Data
          - generic [ref=e227] [cursor=pointer]:
            - generic [ref=e228]:
              - heading "Hydration" [level=6] [ref=e229]
              - img [ref=e230]
            - main [ref=e232]:
              - heading "-- ml" [level=4] [ref=e233]:
                - text: "--"
                - generic [ref=e234]: ml
              - paragraph
            - generic [ref=e235]:
              - paragraph [ref=e236]: "--"
              - paragraph [ref=e237]:
                - img [ref=e239]
                - text: Insufficient Data
          - generic [ref=e243] [cursor=pointer]:
            - generic [ref=e244]:
              - heading "Sleep" [level=6] [ref=e245]
              - img [ref=e246]
            - main [ref=e248]:
              - heading "--" [level=4] [ref=e249]
              - paragraph
            - generic [ref=e250]:
              - paragraph [ref=e251]: "--"
              - paragraph [ref=e252]:
                - img [ref=e254]
                - text: Insufficient Data
          - generic [ref=e258] [cursor=pointer]:
            - generic [ref=e259]:
              - heading "Smoking" [level=6] [ref=e260]
              - img [ref=e261]
            - main [ref=e263]:
              - heading "--" [level=4] [ref=e264]
              - paragraph
            - generic [ref=e265]:
              - paragraph [ref=e266]: "--"
              - paragraph [ref=e267]:
                - img [ref=e269]
                - text: Insufficient Data
          - generic [ref=e273] [cursor=pointer]:
            - generic [ref=e274]:
              - heading "Stress" [level=6] [ref=e275]
              - img [ref=e276]
            - main [ref=e278]:
              - heading "--" [level=4] [ref=e279]
              - paragraph
            - generic [ref=e280]:
              - paragraph [ref=e281]: "--"
              - paragraph [ref=e282]:
                - img [ref=e284]
                - text: Insufficient Data
          - generic [ref=e288] [cursor=pointer]:
            - generic [ref=e289]:
              - heading "Weight" [level=6] [ref=e290]
              - img [ref=e291]
            - main [ref=e293]:
              - heading "-- kg" [level=4] [ref=e294]:
                - text: "--"
                - generic [ref=e295]: kg
            - generic [ref=e296]:
              - paragraph [ref=e297]: "--"
              - paragraph [ref=e298]: Insufficient data
          - generic [ref=e299] [cursor=pointer]:
            - generic [ref=e300]:
              - heading "Body Fat %" [level=6] [ref=e301]
              - img [ref=e302]
            - main [ref=e304]:
              - heading "-- %" [level=4] [ref=e305]:
                - text: "--"
                - generic [ref=e306]: "%"
              - paragraph
            - generic [ref=e307]:
              - paragraph [ref=e308]: "--"
              - paragraph [ref=e309]:
                - img [ref=e311]
                - generic [ref=e315]: "--%"
          - generic [ref=e316] [cursor=pointer]:
            - generic [ref=e317]:
              - heading "Lean Mass %" [level=6] [ref=e318]
              - img [ref=e319]
            - main [ref=e321]:
              - heading "-- %" [level=4] [ref=e322]:
                - text: "--"
                - generic [ref=e323]: "%"
              - paragraph
            - generic [ref=e324]:
              - paragraph [ref=e325]: "--"
              - paragraph [ref=e326]:
                - img [ref=e328]
                - generic [ref=e332]: "--%"
          - generic [ref=e333] [cursor=pointer]:
            - generic [ref=e334]:
              - heading "Fat Mass" [level=6] [ref=e335]
              - img [ref=e336]
            - main [ref=e338]:
              - heading "-- kg" [level=4] [ref=e339]:
                - text: "--"
                - generic [ref=e340]: kg
              - paragraph
            - generic [ref=e341]:
              - paragraph [ref=e342]: "--"
              - paragraph [ref=e343]:
                - img [ref=e345]
                - generic [ref=e349]: "--%"
          - generic [ref=e350] [cursor=pointer]:
            - generic [ref=e351]:
              - heading "Lean Mass" [level=6] [ref=e352]
              - img [ref=e353]
            - main [ref=e355]:
              - heading "-- kg" [level=4] [ref=e356]:
                - text: "--"
                - generic [ref=e357]: kg
              - paragraph
            - generic [ref=e358]:
              - paragraph [ref=e359]: "--"
              - paragraph [ref=e360]:
                - img [ref=e362]
                - generic [ref=e366]: "--%"
          - generic [ref=e367] [cursor=pointer]:
            - generic [ref=e368]:
              - heading "Visceral Fat %" [level=6] [ref=e369]
              - img [ref=e370]
            - main [ref=e372]:
              - heading "-- %" [level=4] [ref=e373]:
                - text: "--"
                - generic [ref=e374]: "%"
              - paragraph
            - generic [ref=e375]:
              - paragraph [ref=e376]: "--"
              - paragraph [ref=e377]:
                - img [ref=e379]
                - generic [ref=e383]: "--%"
          - generic [ref=e384] [cursor=pointer]:
            - generic [ref=e385]:
              - heading "Visceral Fat Mass" [level=6] [ref=e386]
              - img [ref=e387]
            - main [ref=e389]:
              - heading "-- kg" [level=4] [ref=e390]:
                - text: "--"
                - generic [ref=e391]: kg
              - paragraph
            - generic [ref=e392]:
              - paragraph [ref=e393]: "--"
              - paragraph [ref=e394]:
                - img [ref=e396]
                - generic [ref=e400]: "--%"
          - generic [ref=e401] [cursor=pointer]:
            - generic [ref=e402]:
              - heading "Basal Metabolic Rate" [level=6] [ref=e403]
              - img [ref=e404]
            - main [ref=e406]:
              - heading "--" [level=4] [ref=e407]
              - paragraph
            - generic [ref=e408]:
              - paragraph [ref=e409]: "--"
              - paragraph [ref=e410]:
                - img [ref=e412]
                - generic [ref=e416]: "--%"
          - generic [ref=e417] [cursor=pointer]:
            - generic [ref=e418]:
              - heading "Body Roundness Index (BRI)" [level=6] [ref=e419]
              - img [ref=e420]
            - main [ref=e422]:
              - heading "--" [level=4] [ref=e423]
              - paragraph
            - generic [ref=e424]:
              - paragraph [ref=e425]: "--"
              - paragraph [ref=e426]:
                - img [ref=e428]
                - generic [ref=e432]: "--%"
          - generic [ref=e433] [cursor=pointer]:
            - generic [ref=e434]:
              - heading "Predicted BMI" [level=6] [ref=e435]
              - img [ref=e436]
            - main [ref=e438]:
              - heading "--" [level=4] [ref=e439]
              - paragraph
            - generic [ref=e440]:
              - paragraph [ref=e441]: "--"
              - paragraph [ref=e442]:
                - img [ref=e444]
                - generic [ref=e448]: "--%"
          - generic [ref=e449] [cursor=pointer]:
            - generic [ref=e450]:
              - heading "BMI Confidence Score" [level=6] [ref=e451]
              - img [ref=e452]
            - main [ref=e454]:
              - heading "--" [level=4] [ref=e455]
              - paragraph
            - generic [ref=e456]:
              - paragraph [ref=e457]: "--"
              - paragraph [ref=e458]:
                - img [ref=e460]
                - generic [ref=e464]: "--%"
          - generic [ref=e465] [cursor=pointer]:
            - generic [ref=e466]:
              - heading "Waist-To-Hip ratio" [level=6] [ref=e467]
              - img [ref=e468]
            - main [ref=e470]:
              - heading "--" [level=4] [ref=e471]
              - paragraph
            - generic [ref=e472]:
              - paragraph [ref=e473]: "--"
              - paragraph [ref=e474]:
                - img [ref=e476]
                - generic [ref=e480]: "--%"
          - generic [ref=e481] [cursor=pointer]:
            - generic [ref=e482]:
              - heading "Waist-to-Height ratio" [level=6] [ref=e483]
              - img [ref=e484]
            - main [ref=e486]:
              - heading "--" [level=4] [ref=e487]
              - paragraph
            - generic [ref=e488]:
              - paragraph [ref=e489]: "--"
              - paragraph [ref=e490]:
                - img [ref=e492]
                - generic [ref=e496]: "--%"
          - generic [ref=e497] [cursor=pointer]:
            - generic [ref=e498]:
              - heading "Full Body Volume" [level=6] [ref=e499]
              - img [ref=e500]
            - main [ref=e502]:
              - heading "-- m³" [level=4] [ref=e503]:
                - text: "--"
                - generic [ref=e504]: m³
              - paragraph
            - generic [ref=e505]:
              - paragraph [ref=e506]: "--"
              - paragraph [ref=e507]:
                - img [ref=e509]
                - generic [ref=e513]: "--%"
          - generic [ref=e514] [cursor=pointer]:
            - generic [ref=e515]:
              - heading "Neck" [level=6] [ref=e516]
              - img [ref=e517]
            - main [ref=e519]:
              - heading "-- cm" [level=4] [ref=e520]:
                - text: "--"
                - generic [ref=e521]: cm
              - paragraph
            - generic [ref=e522]:
              - paragraph [ref=e523]: "--"
              - paragraph [ref=e524]:
                - img [ref=e526]
                - generic [ref=e530]: "--%"
          - generic [ref=e531] [cursor=pointer]:
            - generic [ref=e532]:
              - heading "Shoulders" [level=6] [ref=e533]
              - img [ref=e534]
            - main [ref=e536]:
              - heading "-- cm" [level=4] [ref=e537]:
                - text: "--"
                - generic [ref=e538]: cm
              - paragraph
            - generic [ref=e539]:
              - paragraph [ref=e540]: "--"
              - paragraph [ref=e541]:
                - img [ref=e543]
                - generic [ref=e547]: "--%"
          - generic [ref=e548] [cursor=pointer]:
            - generic [ref=e549]:
              - heading "Upper Chest" [level=6] [ref=e550]
              - img [ref=e551]
            - main [ref=e553]:
              - heading "-- cm" [level=4] [ref=e554]:
                - text: "--"
                - generic [ref=e555]: cm
              - paragraph
            - generic [ref=e556]:
              - paragraph [ref=e557]: "--"
              - paragraph [ref=e558]:
                - img [ref=e560]
                - generic [ref=e564]: "--%"
          - generic [ref=e565] [cursor=pointer]:
            - generic [ref=e566]:
              - heading "Chest" [level=6] [ref=e567]
              - img [ref=e568]
            - main [ref=e570]:
              - heading "-- cm" [level=4] [ref=e571]:
                - text: "--"
                - generic [ref=e572]: cm
              - paragraph
            - generic [ref=e573]:
              - paragraph [ref=e574]: "--"
              - paragraph [ref=e575]:
                - img [ref=e577]
                - generic [ref=e581]: "--%"
          - generic [ref=e582] [cursor=pointer]:
            - generic [ref=e583]:
              - heading "Waist" [level=6] [ref=e584]
              - img [ref=e585]
            - main [ref=e587]:
              - heading "-- cm" [level=4] [ref=e588]:
                - text: "--"
                - generic [ref=e589]: cm
              - paragraph
            - generic [ref=e590]:
              - paragraph [ref=e591]: "--"
              - paragraph [ref=e592]:
                - img [ref=e594]
                - generic [ref=e598]: "--%"
          - generic [ref=e599] [cursor=pointer]:
            - generic [ref=e600]:
              - heading "Low Waist / Stomach" [level=6] [ref=e601]
              - img [ref=e602]
            - main [ref=e604]:
              - heading "-- cm" [level=4] [ref=e605]:
                - text: "--"
                - generic [ref=e606]: cm
              - paragraph
            - generic [ref=e607]:
              - paragraph [ref=e608]: "--"
              - paragraph [ref=e609]:
                - img [ref=e611]
                - generic [ref=e615]: "--%"
          - generic [ref=e616] [cursor=pointer]:
            - generic [ref=e617]:
              - heading "Hips" [level=6] [ref=e618]
              - img [ref=e619]
            - main [ref=e621]:
              - heading "-- cm" [level=4] [ref=e622]:
                - text: "--"
                - generic [ref=e623]: cm
              - paragraph
            - generic [ref=e624]:
              - paragraph [ref=e625]: "--"
              - paragraph [ref=e626]:
                - img [ref=e628]
                - generic [ref=e632]: "--%"
          - generic [ref=e633] [cursor=pointer]:
            - generic [ref=e634]:
              - heading "Left Mid Arm" [level=6] [ref=e635]
              - img [ref=e636]
            - main [ref=e638]:
              - heading "-- cm" [level=4] [ref=e639]:
                - text: "--"
                - generic [ref=e640]: cm
              - paragraph
            - generic [ref=e641]:
              - paragraph [ref=e642]: "--"
              - paragraph [ref=e643]:
                - img [ref=e645]
                - generic [ref=e649]: "--%"
          - generic [ref=e650] [cursor=pointer]:
            - generic [ref=e651]:
              - heading "Right Mid Arm" [level=6] [ref=e652]
              - img [ref=e653]
            - main [ref=e655]:
              - heading "-- cm" [level=4] [ref=e656]:
                - text: "--"
                - generic [ref=e657]: cm
              - paragraph
            - generic [ref=e658]:
              - paragraph [ref=e659]: "--"
              - paragraph [ref=e660]:
                - img [ref=e662]
                - generic [ref=e666]: "--%"
          - generic [ref=e667] [cursor=pointer]:
            - generic [ref=e668]:
              - heading "Left Forearm" [level=6] [ref=e669]
              - img [ref=e670]
            - main [ref=e672]:
              - heading "-- cm" [level=4] [ref=e673]:
                - text: "--"
                - generic [ref=e674]: cm
              - paragraph
            - generic [ref=e675]:
              - paragraph [ref=e676]: "--"
              - paragraph [ref=e677]:
                - img [ref=e679]
                - generic [ref=e683]: "--%"
          - generic [ref=e684] [cursor=pointer]:
            - generic [ref=e685]:
              - heading "Right Forearm" [level=6] [ref=e686]
              - img [ref=e687]
            - main [ref=e689]:
              - heading "-- cm" [level=4] [ref=e690]:
                - text: "--"
                - generic [ref=e691]: cm
              - paragraph
            - generic [ref=e692]:
              - paragraph [ref=e693]: "--"
              - paragraph [ref=e694]:
                - img [ref=e696]
                - generic [ref=e700]: "--%"
          - generic [ref=e701] [cursor=pointer]:
            - generic [ref=e702]:
              - heading "Left Wrist" [level=6] [ref=e703]
              - img [ref=e704]
            - main [ref=e706]:
              - heading "-- cm" [level=4] [ref=e707]:
                - text: "--"
                - generic [ref=e708]: cm
              - paragraph
            - generic [ref=e709]:
              - paragraph [ref=e710]: "--"
              - paragraph [ref=e711]:
                - img [ref=e713]
                - generic [ref=e717]: "--%"
          - generic [ref=e718] [cursor=pointer]:
            - generic [ref=e719]:
              - heading "Right Wrist" [level=6] [ref=e720]
              - img [ref=e721]
            - main [ref=e723]:
              - heading "-- cm" [level=4] [ref=e724]:
                - text: "--"
                - generic [ref=e725]: cm
              - paragraph
            - generic [ref=e726]:
              - paragraph [ref=e727]: "--"
              - paragraph [ref=e728]:
                - img [ref=e730]
                - generic [ref=e734]: "--%"
          - generic [ref=e735] [cursor=pointer]:
            - generic [ref=e736]:
              - heading "Left Thigh" [level=6] [ref=e737]
              - img [ref=e738]
            - main [ref=e740]:
              - heading "-- cm" [level=4] [ref=e741]:
                - text: "--"
                - generic [ref=e742]: cm
              - paragraph
            - generic [ref=e743]:
              - paragraph [ref=e744]: "--"
              - paragraph [ref=e745]:
                - img [ref=e747]
                - generic [ref=e751]: "--%"
          - generic [ref=e752] [cursor=pointer]:
            - generic [ref=e753]:
              - heading "Right Thigh" [level=6] [ref=e754]
              - img [ref=e755]
            - main [ref=e757]:
              - heading "-- cm" [level=4] [ref=e758]:
                - text: "--"
                - generic [ref=e759]: cm
              - paragraph
            - generic [ref=e760]:
              - paragraph [ref=e761]: "--"
              - paragraph [ref=e762]:
                - img [ref=e764]
                - generic [ref=e768]: "--%"
          - generic [ref=e769] [cursor=pointer]:
            - generic [ref=e770]:
              - heading "Lower Left Thigh" [level=6] [ref=e771]
              - img [ref=e772]
            - main [ref=e774]:
              - heading "-- cm" [level=4] [ref=e775]:
                - text: "--"
                - generic [ref=e776]: cm
              - paragraph
            - generic [ref=e777]:
              - paragraph [ref=e778]: "--"
              - paragraph [ref=e779]:
                - img [ref=e781]
                - generic [ref=e785]: "--%"
          - generic [ref=e786] [cursor=pointer]:
            - generic [ref=e787]:
              - heading "Lower Right Thigh" [level=6] [ref=e788]
              - img [ref=e789]
            - main [ref=e791]:
              - heading "-- cm" [level=4] [ref=e792]:
                - text: "--"
                - generic [ref=e793]: cm
              - paragraph
            - generic [ref=e794]:
              - paragraph [ref=e795]: "--"
              - paragraph [ref=e796]:
                - img [ref=e798]
                - generic [ref=e802]: "--%"
          - generic [ref=e803] [cursor=pointer]:
            - generic [ref=e804]:
              - heading "Left Calf" [level=6] [ref=e805]
              - img [ref=e806]
            - main [ref=e808]:
              - heading "-- cm" [level=4] [ref=e809]:
                - text: "--"
                - generic [ref=e810]: cm
              - paragraph
            - generic [ref=e811]:
              - paragraph [ref=e812]: "--"
              - paragraph [ref=e813]:
                - img [ref=e815]
                - generic [ref=e819]: "--%"
          - generic [ref=e820] [cursor=pointer]:
            - generic [ref=e821]:
              - heading "Right Calf" [level=6] [ref=e822]
              - img [ref=e823]
            - main [ref=e825]:
              - heading "-- cm" [level=4] [ref=e826]:
                - text: "--"
                - generic [ref=e827]: cm
              - paragraph
            - generic [ref=e828]:
              - paragraph [ref=e829]: "--"
              - paragraph [ref=e830]:
                - img [ref=e832]
                - generic [ref=e836]: "--%"
      - generic [ref=e837]:
        - generic [ref=e838]:
          - generic [ref=e839]:
            - heading "Compare" [level=3] [ref=e840]
            - paragraph [ref=e841]: Select a metric to get started.
          - generic [ref=e842]:
            - textbox "Find a metric" [ref=e843]
            - img [ref=e844]
          - button "Deselect All" [ref=e846] [cursor=pointer]
          - generic [ref=e847]:
            - generic [ref=e848]:
              - generic [ref=e849] [cursor=pointer]:
                - generic [ref=e850]: Health
                - img [ref=e851]
              - list [ref=e853]:
                - listitem [ref=e854]:
                  - generic [ref=e855] [cursor=pointer]:
                    - checkbox "Blood Pressure" [ref=e856]
                    - generic [ref=e858]: Blood Pressure
                - listitem [ref=e859]:
                  - generic [ref=e860] [cursor=pointer]:
                    - checkbox "Glucose" [ref=e861]
                    - generic [ref=e863]: Glucose
                - listitem [ref=e864]:
                  - generic [ref=e865] [cursor=pointer]:
                    - checkbox "Heart Rate" [ref=e866]
                    - generic [ref=e868]: Heart Rate
                - listitem [ref=e869]:
                  - generic [ref=e870] [cursor=pointer]:
                    - checkbox "Insulin" [ref=e871]
                    - generic [ref=e873]: Insulin
                - listitem [ref=e874]:
                  - generic [ref=e875] [cursor=pointer]:
                    - checkbox "Time In Range" [ref=e876]
                    - generic [ref=e878]: Time In Range
            - generic [ref=e879]:
              - generic [ref=e880] [cursor=pointer]:
                - generic [ref=e881]: Fitness
                - img [ref=e882]
              - list [ref=e884]:
                - listitem [ref=e885]:
                  - generic [ref=e886] [cursor=pointer]:
                    - checkbox "Activity" [ref=e887]
                    - generic [ref=e889]: Activity
                - listitem [ref=e890]:
                  - generic [ref=e891] [cursor=pointer]:
                    - checkbox "Steps" [ref=e892]
                    - generic [ref=e894]: Steps
            - generic [ref=e895]:
              - generic [ref=e896] [cursor=pointer]:
                - generic [ref=e897]: Lifestyle
                - img [ref=e898]
              - list [ref=e900]:
                - listitem [ref=e901]:
                  - generic [ref=e902] [cursor=pointer]:
                    - checkbox "Alcohol" [ref=e903]
                    - generic [ref=e905]: Alcohol
                - listitem [ref=e906]:
                  - generic [ref=e907] [cursor=pointer]:
                    - checkbox "Food" [ref=e908]
                    - generic [ref=e910]: Food
                - listitem [ref=e911]:
                  - generic [ref=e912] [cursor=pointer]:
                    - checkbox "Hydration" [ref=e913]
                    - generic [ref=e915]: Hydration
                - listitem [ref=e916]:
                  - generic [ref=e917] [cursor=pointer]:
                    - checkbox "Sleep" [ref=e918]
                    - generic [ref=e920]: Sleep
                - listitem [ref=e921]:
                  - generic [ref=e922] [cursor=pointer]:
                    - checkbox "Smoking" [ref=e923]
                    - generic [ref=e925]: Smoking
                - listitem [ref=e926]:
                  - generic [ref=e927] [cursor=pointer]:
                    - checkbox "Stress" [ref=e928]
                    - generic [ref=e930]: Stress
                - listitem [ref=e931]:
                  - generic [ref=e932] [cursor=pointer]:
                    - checkbox "Weight" [ref=e933]
                    - generic [ref=e935]: Weight
            - generic [ref=e936]:
              - generic [ref=e937] [cursor=pointer]:
                - generic [ref=e938]: Body Composition Analysis
                - img [ref=e939]
              - list [ref=e941]:
                - listitem [ref=e942]:
                  - generic [ref=e943] [cursor=pointer]:
                    - checkbox "Body Fat %" [ref=e944]
                    - generic [ref=e946]: Body Fat %
                - listitem [ref=e947]:
                  - generic [ref=e948] [cursor=pointer]:
                    - checkbox "Lean Mass %" [ref=e949]
                    - generic [ref=e951]: Lean Mass %
                - listitem [ref=e952]:
                  - generic [ref=e953] [cursor=pointer]:
                    - checkbox "Fat Mass" [ref=e954]
                    - generic [ref=e956]: Fat Mass
                - listitem [ref=e957]:
                  - generic [ref=e958] [cursor=pointer]:
                    - checkbox "Lean Mass" [ref=e959]
                    - generic [ref=e961]: Lean Mass
                - listitem [ref=e962]:
                  - generic [ref=e963] [cursor=pointer]:
                    - checkbox "Visceral Fat %" [ref=e964]
                    - generic [ref=e966]: Visceral Fat %
                - listitem [ref=e967]:
                  - generic [ref=e968] [cursor=pointer]:
                    - checkbox "Visceral Fat Mass" [ref=e969]
                    - generic [ref=e971]: Visceral Fat Mass
                - listitem [ref=e972]:
                  - generic [ref=e973] [cursor=pointer]:
                    - checkbox "Basal Metabolic Rate" [ref=e974]
                    - generic [ref=e976]: Basal Metabolic Rate
                - listitem [ref=e977]:
                  - generic [ref=e978] [cursor=pointer]:
                    - checkbox "Body Roundness Index (BRI)" [ref=e979]
                    - generic [ref=e981]: Body Roundness Index (BRI)
                - listitem [ref=e982]:
                  - generic [ref=e983] [cursor=pointer]:
                    - checkbox "Predicted BMI" [ref=e984]
                    - generic [ref=e986]: Predicted BMI
                - listitem [ref=e987]:
                  - generic [ref=e988] [cursor=pointer]:
                    - checkbox "BMI Confidence Score" [ref=e989]
                    - generic [ref=e991]: BMI Confidence Score
                - listitem [ref=e992]:
                  - generic [ref=e993] [cursor=pointer]:
                    - checkbox "Waist-To-Hip ratio" [ref=e994]
                    - generic [ref=e996]: Waist-To-Hip ratio
                - listitem [ref=e997]:
                  - generic [ref=e998] [cursor=pointer]:
                    - checkbox "Waist-to-Height ratio" [ref=e999]
                    - generic [ref=e1001]: Waist-to-Height ratio
                - listitem [ref=e1002]:
                  - generic [ref=e1003] [cursor=pointer]:
                    - checkbox "Full Body Volume" [ref=e1004]
                    - generic [ref=e1006]: Full Body Volume
                - listitem [ref=e1007]:
                  - generic [ref=e1008] [cursor=pointer]:
                    - checkbox "Neck" [ref=e1009]
                    - generic [ref=e1011]: Neck
                - listitem [ref=e1012]:
                  - generic [ref=e1013] [cursor=pointer]:
                    - checkbox "Shoulders" [ref=e1014]
                    - generic [ref=e1016]: Shoulders
                - listitem [ref=e1017]:
                  - generic [ref=e1018] [cursor=pointer]:
                    - checkbox "Upper Chest" [ref=e1019]
                    - generic [ref=e1021]: Upper Chest
                - listitem [ref=e1022]:
                  - generic [ref=e1023] [cursor=pointer]:
                    - checkbox "Chest" [ref=e1024]
                    - generic [ref=e1026]: Chest
                - listitem [ref=e1027]:
                  - generic [ref=e1028] [cursor=pointer]:
                    - checkbox "Waist" [ref=e1029]
                    - generic [ref=e1031]: Waist
                - listitem [ref=e1032]:
                  - generic [ref=e1033] [cursor=pointer]:
                    - checkbox "Low Waist / Stomach" [ref=e1034]
                    - generic [ref=e1036]: Low Waist / Stomach
                - listitem [ref=e1037]:
                  - generic [ref=e1038] [cursor=pointer]:
                    - checkbox "Hips" [ref=e1039]
                    - generic [ref=e1041]: Hips
                - listitem [ref=e1042]:
                  - generic [ref=e1043] [cursor=pointer]:
                    - checkbox "Left Mid Arm" [ref=e1044]
                    - generic [ref=e1046]: Left Mid Arm
                - listitem [ref=e1047]:
                  - generic [ref=e1048] [cursor=pointer]:
                    - checkbox "Right Mid Arm" [ref=e1049]
                    - generic [ref=e1051]: Right Mid Arm
                - listitem [ref=e1052]:
                  - generic [ref=e1053] [cursor=pointer]:
                    - checkbox "Left Forearm" [ref=e1054]
                    - generic [ref=e1056]: Left Forearm
                - listitem [ref=e1057]:
                  - generic [ref=e1058] [cursor=pointer]:
                    - checkbox "Right Forearm" [ref=e1059]
                    - generic [ref=e1061]: Right Forearm
                - listitem [ref=e1062]:
                  - generic [ref=e1063] [cursor=pointer]:
                    - checkbox "Left Wrist" [ref=e1064]
                    - generic [ref=e1066]: Left Wrist
                - listitem [ref=e1067]:
                  - generic [ref=e1068] [cursor=pointer]:
                    - checkbox "Right Wrist" [ref=e1069]
                    - generic [ref=e1071]: Right Wrist
                - listitem [ref=e1072]:
                  - generic [ref=e1073] [cursor=pointer]:
                    - checkbox "Left Thigh" [ref=e1074]
                    - generic [ref=e1076]: Left Thigh
                - listitem [ref=e1077]:
                  - generic [ref=e1078] [cursor=pointer]:
                    - checkbox "Right Thigh" [ref=e1079]
                    - generic [ref=e1081]: Right Thigh
                - listitem [ref=e1082]:
                  - generic [ref=e1083] [cursor=pointer]:
                    - checkbox "Lower Left Thigh" [ref=e1084]
                    - generic [ref=e1086]: Lower Left Thigh
                - listitem [ref=e1087]:
                  - generic [ref=e1088] [cursor=pointer]:
                    - checkbox "Lower Right Thigh" [ref=e1089]
                    - generic [ref=e1091]: Lower Right Thigh
                - listitem [ref=e1092]:
                  - generic [ref=e1093] [cursor=pointer]:
                    - checkbox "Left Calf" [ref=e1094]
                    - generic [ref=e1096]: Left Calf
                - listitem [ref=e1097]:
                  - generic [ref=e1098] [cursor=pointer]:
                    - checkbox "Right Calf" [ref=e1099]
                    - generic [ref=e1101]: Right Calf
        - generic [ref=e1102]:
          - generic [ref=e1103]:
            - heading "Metrics Comparison" [level=2] [ref=e1104]
            - generic [ref=e1106]:
              - paragraph [ref=e1107]: Zoom
              - button "1d" [ref=e1108] [cursor=pointer]
              - button "1w" [ref=e1109] [cursor=pointer]
              - button "1m" [ref=e1110] [cursor=pointer]
              - button "3m" [ref=e1111] [cursor=pointer]
              - button "6m" [ref=e1112] [cursor=pointer]
              - button "YTD" [ref=e1113] [cursor=pointer]
              - button "1y" [ref=e1114] [cursor=pointer]
              - button "ALL" [ref=e1115] [cursor=pointer]
          - img [ref=e1119]
      - generic [ref=e1139]:
        - generic [ref=e1140]:
          - paragraph [ref=e1142]: Chat
          - button "delete" [ref=e1143] [cursor=pointer]:
            - img [ref=e1144]
        - generic [ref=e1148]:
          - paragraph [ref=e1149] [cursor=pointer]: Metabolic
          - paragraph [ref=e1150] [cursor=pointer]: Zone
  - alert [ref=e1151]
```

# Test source

```ts
  5   | 
  6   |     // ── Navigation ────────────────────────────────────────────────
  7   |     this.healthInfoTab = page.getByRole('link', { name: 'Health Info' });
  8   | 
  9   |     // ── Primary metric cards (Blood Pressure, Glucose, Activity, Weight, Food) ──
  10  |     this.metricCardSelected = page.locator('.PrimaryMetricCard_primaryMetricCard__2TvaF.PrimaryMetricCard_selected__q8sS7');
  11  |     this.metricCardHeaderIcon = this.metricCardSelected.locator('.PrimaryMetricCard_pmcHeader__zmDFN > svg');
  12  |     this.closeBtn = page.getByRole('button', { name: 'Close' });
  13  | 
  14  |     // ── Food editing ────────────────────────────────────────────────
  15  |     this.editBtn        = page.getByRole('button', { name: 'Edit' });
  16  |     this.saveChangesBtn  = page.getByRole('button', { name: 'Save Changes' });
  17  | 
  18  |     // ── Feedback ──────────────────────────────────────────────────
  19  |     this.addFeedbackBtn   = page.getByRole('button', { name: 'Add feedback' });
  20  |     this.goodBtn          = page.getByRole('button', { name: 'Good', exact: true });
  21  |     this.goodCarbChoiceBtn = page.getByRole('button', { name: 'Good carb choice' });
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
  49  |   // ── Open a metric card's detail panel by partial label text ──
  50  |   // e.g. 'Blood Pressure', 'Glucose', 'Activity', 'Weight', 'Food'
  51  |   async openMetricDetail(metricLabel) {
  52  |     const card = this.page.getByText(new RegExp(`^${metricLabel}`)).first();
  53  |     await card.waitFor({ state: 'visible', timeout: 10000 });
  54  |     await card.click();
  55  |   }
  56  | 
  57  |   // ── Close the currently open metric detail panel ───────────────
  58  |   async closeMetricDetail() {
  59  |     // The selected card's header icon also closes the panel in some flows
  60  |     const hasSelectedIcon = await this.metricCardHeaderIcon.first().isVisible({ timeout: 3000 }).catch(() => false);
  61  |     if (hasSelectedIcon) {
  62  |       await this.metricCardHeaderIcon.first().click();
  63  |     }
  64  |     const hasCloseBtn = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  65  |     if (hasCloseBtn) {
  66  |       await this.closeBtn.first().click();
  67  |     }
  68  |   }
  69  | 
  70  |   // ── Edit food entry values ──────────────────────────────────────
  71  |   // values: { calories, carbs, protein, fat, sugar, fiber } — only fields you want to fill
  72  |   async editFoodEntry(values) {
  73  |     await this.editBtn.first().click();
  74  | 
  75  |     const textboxes = this.page.getByRole('textbox');
  76  |     const fieldOrder = ['calories', 'carbs', 'protein', 'fat'];
  77  |     let idx = 2; // Codegen showed editable fields starting at index 2
  78  | 
  79  |     for (const field of fieldOrder) {
  80  |       if (values[field] !== undefined) {
  81  |         const box = textboxes.nth(idx);
  82  |         await box.click();
  83  |         await box.fill(String(values[field]));
  84  |       }
  85  |       idx++;
  86  |     }
  87  | 
  88  |     // Sugar and fiber use specific grid selectors
  89  |     if (values.sugar !== undefined) {
  90  |       const sugarInput = this.page.locator('.HistorySidebarRevamp_foodCardFormGrid__UQaR3 > div:nth-child(4) > input');
  91  |       await sugarInput.click();
  92  |       await sugarInput.fill(String(values.sugar));
  93  |     }
  94  |     if (values.fiber !== undefined) {
  95  |       const fiberInput = this.page.locator('div:nth-child(5) > input');
  96  |       await fiberInput.click();
  97  |       await fiberInput.fill(String(values.fiber));
  98  |     }
  99  | 
  100 |     await this.saveChangesBtn.click();
  101 |   }
  102 | 
  103 |   // ── Add clinician feedback on a food/activity entry ────────────
  104 |   async addFeedback({ rating = 'Good', tag = null, comment = '' }) {
> 105 |     await this.addFeedbackBtn.first().click();
      |                                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  106 | 
  107 |     if (rating) {
  108 |       await this.page.getByRole('button', { name: rating, exact: true }).click();
  109 |     }
  110 |     if (tag) {
  111 |       await this.page.getByRole('button', { name: tag }).click();
  112 |     }
  113 |     if (comment) {
  114 |       await this.feedbackInput.click();
  115 |       await this.feedbackInput.fill(comment);
  116 |     }
  117 | 
  118 |     await this.saveShareBtn.click();
  119 |     // Close confirmation if it appears
  120 |     const hasClose = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  121 |     if (hasClose) {
  122 |       await this.closeBtn.first().click();
  123 |     }
  124 |   }
  125 | 
  126 |   // ── Toggle a chart metric checkbox on/off ─────────────────────
  127 |   async toggleChartMetric(metricName, checked = true) {
  128 |     const checkbox = this.page.getByRole('checkbox', { name: metricName });
  129 |     if (checked) {
  130 |       await checkbox.check();
  131 |     } else {
  132 |       await checkbox.uncheck();
  133 |     }
  134 |   }
  135 | 
  136 |   // ── Select a time range for the chart ──────────────────────────
  137 |   // range: '1d' | '1w' | '1m' | '6m' | 'YTD'
  138 |   async selectTimeRange(range) {
  139 |     const btn = this.page.getByRole('button', { name: range, exact: true });
  140 |     await btn.waitFor({ state: 'visible', timeout: 10000 });
  141 |     await btn.click();
  142 |   }
  143 | 
  144 |   // ── Open Latest Updates filter and select all + apply ──────────
  145 |   async applyLatestUpdatesFilter(selectAll = true) {
  146 |     const filterBtn = this.latestUpdatesHeader.getByRole('button');
  147 |     await filterBtn.click();
  148 | 
  149 |     if (selectAll) {
  150 |       await this.selectAllCheckbox.check();
  151 |     }
  152 | 
  153 |     await this.applyBtn.click();
  154 |   }
  155 | }
  156 | 
  157 | module.exports = { HealthInfoPage };
```