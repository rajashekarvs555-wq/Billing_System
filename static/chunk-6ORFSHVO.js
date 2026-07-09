import{a as Y}from"./chunk-B5GEYZPP.js";import{a as K}from"./chunk-ZDVINK2N.js";import{a as X}from"./chunk-TKOON2AY.js";import{a as $,b as _,c as R,d as j,f as D,g as G,h as z,i as q,j as L,k as U,l as W,m as Q,n as Z,o as H,q as J}from"./chunk-77FSFZ7B.js";import{a as A}from"./chunk-JQ65RHU4.js";import{$a as o,Cb as T,Da as B,Db as k,Gb as I,Ha as v,Hb as V,Oa as u,Ra as i,Sa as e,Ta as m,Ua as E,Va as h,Wa as x,Z as F,_ as M,ab as O,bb as y,hb as C,jb as w,ua as s,ya as N}from"./chunk-EQL4FING.js";function et(d,n){d&1&&(i(0,"div",74),o(1," Bill Number is required. "),e())}function it(d,n){d&1&&(i(0,"div",74),o(1," Date is required. "),e())}function nt(d,n){if(d&1&&(i(0,"option",75),o(1),e()),d&2){let t=n.$implicit;u("value",t.id),s(),y(" ",t.customer_name," ")}}function lt(d,n){d&1&&(i(0,"div",74),o(1," Customer selection is required. "),e())}function ot(d,n){if(d&1){let t=E();i(0,"tr",76)(1,"td",77),m(2,"input",78),e(),i(3,"td",79),m(4,"input",80),e(),i(5,"td",81),m(6,"input",82),e(),i(7,"td",83),m(8,"input",84),e(),i(9,"td",85)(10,"input",86),h("input",function(){let r=F(t).index,c=x();return M(c.calculateRow(r))}),e()(),i(11,"td",87)(12,"input",88),h("input",function(){let r=F(t).index,c=x();return M(c.calculateRow(r))}),e()(),i(13,"td",89),m(14,"input",90),e(),i(15,"td",91)(16,"button",92),h("click",function(){let r=F(t).index,c=x();return M(c.removeItemRow(r))}),m(17,"i",93),e()()()}if(d&2){let t=n.index,l=x();u("formGroupName",t),s(16),u("disabled",l.items.length<=1)}}function rt(d,n){if(d&1&&(i(0,"div",94),o(1),e()),d&2){let t=x();s(),y(" ",t.items.length," line item(s) included ")}}function at(d,n){if(d&1){let t=E();i(0,"div",95)(1,"div",96)(2,"div",97)(3,"h3"),m(4,"i",98),i(5,"span",99),o(6,"Seller Company Settings"),e()(),i(7,"button",100),h("click",function(){F(t);let r=x();return M(r.closeSellerModal())}),m(8,"i",101),e()(),i(9,"form",102),h("ngSubmit",function(){F(t);let r=x();return M(r.submitSellerProfile())}),i(10,"div",103)(11,"label",13),o(12,"Company / Seller Name *"),e(),m(13,"input",104),e(),i(14,"div",103)(15,"label",13),o(16,"Company Address *"),e(),m(17,"textarea",105),e(),i(18,"div",20)(19,"label",13),o(20,"GSTIN *"),e(),m(21,"input",106),e(),i(22,"div",20)(23,"label",13),o(24,"Cell / Contact Phone *"),e(),m(25,"input",107),e(),i(26,"div",108)(27,"button",69),h("click",function(){F(t);let r=x();return M(r.closeSellerModal())}),o(28,"Cancel"),e(),i(29,"button",109),o(30,"Save Business Profile"),e()()()()()}if(d&2){let t=x();s(9),u("formGroup",t.sellerForm)}}function st(d,n){if(d&1&&m(0,"option",75),d&2){let t=n.$implicit;u("value",t.vehicle_no)}}function mt(d,n){if(d&1&&m(0,"option",75),d&2){let t=n.$implicit;u("value",t.material_name)}}var tt=class d{constructor(n,t,l,r,c){this.fb=n;this.customerService=t;this.billService=l;this.toast=r;this.inventoryService=c}fb;customerService;billService;toast;inventoryService;customers=[];vehicles=[];materials=[];billForm;sellerForm;loadedBillNo;showSellerModal=!1;ngOnInit(){this.initializeForm(),this.loadCustomers(),this.loadVehicles(),this.loadMaterials(),this.addItemRow(),this.fetchNextBillNo()}initializeForm(){this.billForm=this.fb.group({bill_no:["",[_.required,_.min(1)]],bill_date:[new Date().toISOString().split("T")[0],_.required],customer_id:["",_.required],gst_type:["none"],cgst_pct:[0],sgst_pct:[0],igst_pct:[0],cgst:[0],sgst:[0],igst:[0],notes:[""],items:this.fb.array([])});let n=this.getSellerProfile();this.sellerForm=this.fb.group({name:[n.name,_.required],address:[n.address,_.required],gstin:[n.gstin,_.required],phone:[n.phone,_.required]}),this.billForm.get("gst_type")?.valueChanges.subscribe(t=>{t==="none"?this.billForm.patchValue({cgst_pct:0,sgst_pct:0,igst_pct:0,cgst:0,sgst:0,igst:0},{emitEvent:!1}):this.calculateTotals()})}get items(){return this.billForm.get("items")}createItemRow(){return this.fb.group({item_date:[new Date().toISOString().split("T")[0]],vehicle:[""],material:[""],dc_no:[""],qty:[0,[_.min(0)]],rate:[0,[_.min(0)]],amount:[0]})}addItemRow(){this.items.push(this.createItemRow())}removeItemRow(n){this.items.removeAt(n),this.calculateTotals()}loadCustomers(){this.customerService.getCustomers().subscribe(n=>{this.customers=n})}loadVehicles(){this.inventoryService.getVehicles().subscribe(n=>this.vehicles=n,n=>console.error("Failed to load vehicles",n))}loadMaterials(){this.inventoryService.getMaterials().subscribe(n=>this.materials=n,n=>console.error("Failed to load materials",n))}calculateRow(n){let t=this.items.at(n),l=Number(t.get("qty")?.value||0),r=Number(t.get("rate")?.value||0);t.patchValue({amount:Math.round(l*r*100)/100},{emitEvent:!1}),this.calculateTotals()}get subtotal(){let n=0;return this.items.controls.forEach(t=>{n+=Number(t.get("amount")?.value||0)}),n}get taxAmount(){return Number(this.billForm.value.cgst||0)+Number(this.billForm.value.sgst||0)+Number(this.billForm.value.igst||0)}get grandTotal(){return this.subtotal+this.taxAmount}calculateTotals(){let n=this.subtotal,t=this.billForm.get("gst_type")?.value||"none";if(t==="cgst_sgst"){let l=Math.round(n*.09*100)/100;this.billForm.patchValue({cgst_pct:9,sgst_pct:9,igst_pct:0,cgst:l,sgst:l,igst:0},{emitEvent:!1})}else if(t==="igst"){let l=Math.round(n*.18*100)/100;this.billForm.patchValue({cgst_pct:0,sgst_pct:0,igst_pct:18,cgst:0,sgst:0,igst:l},{emitEvent:!1})}else if(t==="none"){let l=Number(this.billForm.get("cgst_pct")?.value||0),r=Number(this.billForm.get("sgst_pct")?.value||0),c=Number(this.billForm.get("igst_pct")?.value||0),f=Math.round(n*(l/100)*100)/100,b=Math.round(n*(r/100)*100)/100,g=Math.round(n*(c/100)*100)/100;this.billForm.patchValue({cgst:f,sgst:b,igst:g},{emitEvent:!1})}}getSellerProfile(){let n={name:"SARAVANA ENTERPRISES",address:"No 68, Kodoor Panchayat, Vellodai Road, Krishnapuram, Ponneri, Tamil Nadu, 601204",gstin:"33BBMPS6356P1ZR",phone:"9884878988"};if(typeof window>"u"||typeof localStorage>"u")return n;let t=localStorage.getItem("seller_profile");return t?JSON.parse(t):n}openSellerModal(){let n=this.getSellerProfile();this.sellerForm.patchValue(n),this.showSellerModal=!0}closeSellerModal(){this.showSellerModal=!1}submitSellerProfile(){if(this.sellerForm.invalid){this.sellerForm.markAllAsTouched();return}typeof localStorage<"u"&&localStorage.setItem("seller_profile",JSON.stringify(this.sellerForm.value)),this.showSellerModal=!1,this.toast.success("Seller profile updated successfully.")}saveBill(){if(this.billForm.invalid){this.billForm.markAllAsTouched(),this.toast.warning("Please fill in all required bill details.");return}let n=this.billForm.value;if(this.loadedBillNo){this.billService.updateBill(this.loadedBillNo,n).subscribe(t=>{this.toast.success("Bill updated successfully!"),this.loadedBillNo=t.bill_no},t=>{let l=t.error?.detail||"Failed to update bill.";this.toast.error(l)});return}this.billService.createBill(n).subscribe(t=>{this.loadedBillNo=t.bill_no,this.billForm.patchValue({bill_no:t.bill_no}),this.toast.success("Bill created successfully!")},t=>{let l=t.error?.detail||"Failed to create bill.";this.toast.error(l)})}loadBill(){let n=Number(this.billForm.value.bill_no);if(!n){this.toast.warning("Please enter a valid Bill Number to load.");return}this.billService.getBill(n).subscribe(t=>{this.loadedBillNo=t.bill_no,this.items.clear(),t.items.forEach(g=>{this.items.push(this.fb.group(g))});let l=t.gst_type;l==null&&(t.igst&&t.igst>0?l="igst":t.cgst&&t.cgst>0||t.sgst&&t.sgst>0?l="cgst_sgst":l="none");let r=t.subtotal||1,c=t.cgst_pct!==void 0&&t.cgst_pct!==null?t.cgst_pct:t.cgst?Math.round(t.cgst/r*1e4)/100:0,f=t.sgst_pct!==void 0&&t.sgst_pct!==null?t.sgst_pct:t.sgst?Math.round(t.sgst/r*1e4)/100:0,b=t.igst_pct!==void 0&&t.igst_pct!==null?t.igst_pct:t.igst?Math.round(t.igst/r*1e4)/100:0;this.billForm.patchValue({bill_no:t.bill_no,bill_date:t.bill_date,customer_id:t.customer_id||t.customer?.id,gst_type:l,cgst_pct:c,sgst_pct:f,igst_pct:b,cgst:t.cgst||0,sgst:t.sgst||0,igst:t.igst||0,notes:t.notes||""},{emitEvent:!1}),this.toast.success(`Bill #${n} loaded successfully.`)},t=>{this.toast.error(`Bill #${n} not found.`)})}downloadExcel(){this.loadedBillNo&&this.billService.downloadExcel(this.loadedBillNo).subscribe(n=>{let t=window.URL.createObjectURL(n),l=document.createElement("a");l.href=t;let r=n.type.includes("csv");l.download=`Bill_${this.loadedBillNo}${r?".csv":".xlsx"}`,l.click(),window.URL.revokeObjectURL(t)})}downloadPdf(){if(!this.loadedBillNo){this.toast.warning("Please save the bill first before downloading PDF.");return}let n=this.customers.find(p=>p.id===Number(this.billForm.value.customer_id)),t=n?n.customer_name:"Unknown Customer",l=n&&n.address||"&mdash;",r=n&&n.gst_number||"&mdash;",c=this.getSellerProfile(),f=this.billForm.value.items||[],b=p=>Number(p||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),g=p=>"\u20B9 "+b(p),a=window.open("","_blank");if(!a){this.toast.error("Popup blocker is active. Please allow popups to download PDF.");return}a.document.write(`
      <html>
      <head>
        <title>${this.loadedBillNo}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            background-color: #fff;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
            font-family: Arial, sans-serif;
            color: #000;
            width: 210mm;
            padding: 15mm 20mm;
            box-sizing: border-box;
            position: relative;
          }
          .invoice-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            border-bottom: 1.5px solid #000;
            padding-bottom: 15px;
          }
          .title-section {
            text-align: right;
          }
          .title-section h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 10px 0;
            letter-spacing: -0.5px;
          }
          .seller-title {
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 6px 0;
          }
          .seller-text {
            font-size: 12px;
            line-height: 1.4;
          }
          .meta-table {
            border-collapse: collapse;
            font-size: 12px;
          }
          .meta-table td {
            padding: 3px 6px;
            vertical-align: top;
          }
          .meta-label {
            font-weight: bold;
            text-align: right;
            padding-right: 15px;
          }
          .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 15px;
          }
          .items-table th, .items-table td {
            border: 1px solid #000;
            padding: 5px 8px;
            font-size: 12px;
          }
          .items-table th {
            font-weight: bold;
            background-color: #fff;
            text-align: left;
          }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          
          .footer-section {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }
          .notes-container {
            width: 55%;
            font-size: 11px;
            line-height: 1.4;
          }
          .notes-container strong {
            display: block;
            margin-bottom: 4px;
          }
          .totals-table {
            width: 38%;
            border-collapse: collapse;
            font-size: 12px;
          }
          .totals-table td {
            padding: 3px 5px;
          }
          .totals-table tr.grand-total td {
            font-weight: bold;
            font-size: 14px;
            border-top: 1.5px solid #000;
            border-bottom: 2px double #000;
            padding-top: 6px;
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <div class="invoice-header">
          <div style="width: 55%;">
            <div class="seller-title">${c.name}</div>
            <div class="seller-text">
              ${c.address.replace(/\n/g,"<br>")}<br><br>
              <strong>GSTIN:</strong> ${c.gstin}<br>
              <strong>Cell:</strong> ${c.phone}
            </div>
          </div>
          <div class="title-section" style="width: 45%;">
            <h1>Bill Statement</h1>
            <table class="meta-table" align="right">
              <tr>
                <td class="meta-label">Bill No #:</td>
                <td>${this.loadedBillNo}</td>
              </tr>
              <tr>
                <td class="meta-label">Date:</td>
                <td>${this.billForm.value.bill_date}</td>
              </tr>
              <tr>
                <td class="meta-label">Bill to:</td>
                <td>${t}</td>
              </tr>
              <tr>
                <td class="meta-label">Address:</td>
                <td>${l.replace(/\n/g,"<br>")}</td>
              </tr>
              <tr>
                <td class="meta-label">Recipient's GST:</td>
                <td>${r}</td>
              </tr>
            </table>
          </div>
        </div>

        <!-- Items Table -->
        <table class="items-table">
          <thead>
            <tr>
              <th width="50" class="text-center">S.No</th>
              <th width="100">Date</th>
              <th width="130">Vehicle</th>
              <th>Material</th>
              <th width="90">DC No</th>
              <th width="70" class="text-right">Qty</th>
              <th width="90" class="text-right">Rate</th>
              <th width="120" class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${f.map((p,S)=>`
              <tr>
                <td class="text-center">${S+1}</td>
                <td>${p.item_date||""}</td>
                <td>${p.vehicle||""}</td>
                <td>${p.material||""}</td>
                <td>${p.dc_no||""}</td>
                <td class="text-right">${p.qty||0}</td>
                <td class="text-right">${b(p.rate)}</td>
                <td class="text-right">${g(p.amount)}</td>
              </tr>
            `).join("")}
            
            <!-- Generate blank rows to fill visual grid up to 12 rows exactly like spreadsheet -->
            ${Array(Math.max(0,12-f.length)).fill(0).map((p,S)=>`
              <tr>
                <td class="text-center">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <!-- Footer -->
        <div class="footer-section">
          <div class="notes-container">
            <strong>Notes:</strong>
            <div style="white-space: pre-line; margin-bottom: 12px;">${this.billForm.value.notes||"Please remit payment as per invoice details."}</div>
            <div style="border-top: 1px dashed #a8a8a8; padding-top: 10px; margin-top: 10px;">
              <strong>Amount in Words:</strong>
              <div style="text-transform: capitalize; font-style: italic; font-weight: bold; color: #1e293b; margin-top: 4px; font-size: 13px;">
                ${this.getAmountInWords(this.grandTotal)}
              </div>
            </div>
          </div>
          <table class="totals-table">
            <tr>
              <td>Sub Total</td>
              <td class="text-right">${b(this.subtotal)}</td>
            </tr>
            ${this.billForm.value.cgst>0?`
              <tr>
                <td>CGST</td>
                <td class="text-right">${b(this.billForm.value.cgst)}</td>
              </tr>
            `:""}
            ${this.billForm.value.sgst>0?`
              <tr>
                <td>SGST</td>
                <td class="text-right">${b(this.billForm.value.sgst)}</td>
              </tr>
            `:""}
            ${this.billForm.value.igst>0?`
              <tr>
                <td>IGST</td>
                <td class="text-right">${b(this.billForm.value.igst)}</td>
              </tr>
            `:""}
            <tr class="grand-total">
              <td>Grand Total</td>
              <td class="text-right">${g(this.grandTotal)}</td>
            </tr>
          </table>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"><\/script>
        <script>
          window.onload = function() {
            setTimeout(function() {
              if (typeof html2pdf !== 'undefined') {
                var element = document.body;
                var opt = {
                  margin:       0,
                  filename:     '${this.loadedBillNo}.pdf',
                  image:        { type: 'jpeg', quality: 0.98 },
                  html2canvas:  { scale: 2, useCORS: true },
                  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
                  pagebreak:    { mode: 'avoid-all' }
                };
                html2pdf().set(opt).from(element).save().then(function() {
                  setTimeout(function() { window.close(); }, 1000);
                }).catch(function(err) {
                  console.error('html2pdf failed, falling back to window.print()', err);
                  window.print();
                });
              } else {
                console.warn('html2pdf is not loaded, falling back to window.print()');
                window.print();
              }
            }, 300);
          };
        <\/script>
      </body>
      </html>
    `),a.document.close()}resetForm(){this.loadedBillNo=void 0,this.items.clear(),this.billForm.reset(),this.billForm.patchValue({bill_date:new Date().toISOString().split("T")[0],gst_type:"none",cgst_pct:0,sgst_pct:0,igst_pct:0,cgst:0,sgst:0,igst:0}),this.addItemRow(),this.fetchNextBillNo()}fetchNextBillNo(){this.billService.getNextBillNo().subscribe({next:n=>{this.billForm.patchValue({bill_no:n.next_bill_no})},error:n=>{console.error("Failed to fetch next bill number:",n)}})}getAmountInWords(n){let t=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],l=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];if(n===0)return"Zero Rupees Only";let r=n.toFixed(2).split("."),c=parseInt(r[0],10),f=parseInt(r[1],10),b=a=>a<20?t[a]:a<100?l[Math.floor(a/10)]+(a%10!==0?" "+t[a%10]:""):t[Math.floor(a/100)]+" Hundred"+(a%100!==0?" and "+b(a%100):""),g="";if(c>0){let a=c,p=Math.floor(a/1e7);a%=1e7,p>0&&(g+=(p<100,b(p)+" Crore "));let S=Math.floor(a/1e5);a%=1e5,S>0&&(g+=b(S)+" Lakh ");let P=Math.floor(a/1e3);a%=1e3,P>0&&(g+=b(P)+" Thousand "),a>0&&(g+=b(a)+" "),g=g.trim()+" Rupees"}if(f>0){let a=b(f);g?g+=" and "+a+" Paise":g=a+" Paise"}return g?g.trim()+" Only":""}static \u0275fac=function(t){return new(t||d)(N(H),N(X),N(K),N(A),N(Y))};static \u0275cmp=B({type:d,selectors:[["app-bill-form"]],decls:156,vars:44,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-4","flex-wrap","gap-3"],[1,"page-title","mb-1"],[1,"text-secondary","mb-0"],[3,"ngSubmit","formGroup"],[1,"row","g-4"],[1,"col-lg-9"],[1,"card-custom","mb-4","bill-meta-card"],[1,"row","g-3"],[1,"col-12","d-flex","justify-content-between","align-items-center","flex-wrap","gap-2","mb-2"],[1,"section-title","mb-0"],["type","button",1,"btn","btn-outline-secondary","btn-sm",3,"click"],[1,"bi","bi-gear-fill"],[1,"col-sm-6","col-md-3"],[1,"form-label"],[1,"input-group"],["type","number","formControlName","bill_no","placeholder","Enter Bill No",1,"form-control"],["type","button","title","Search Bill",1,"btn","btn-outline-primary",3,"click"],[1,"bi","bi-search"],["class","text-danger mt-1 small fw-semibold",4,"ngIf"],["type","date","formControlName","bill_date",1,"form-control"],[1,"col-md-6"],["formControlName","customer_id",1,"form-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"card-custom","mb-4"],[1,"section-title","mb-3"],[1,"bi","bi-list-stars","me-2","text-primary"],[1,"table-responsive"],[1,"table","align-middle","table-bill-items"],["width","120"],["width","150"],["width","140"],["width","100"],["width","110"],["width","40",1,"text-center"],["formArrayName","items"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"mt-3"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"bi","bi-plus-lg"],["rows","3","formControlName","notes","placeholder","Add terms, bank details, or delivery notes here...",1,"form-control"],[1,"col-lg-3"],[1,"sticky-sidebar-container"],[1,"summary-sidebar","mb-4"],[1,"summary-title"],[1,"summary-value"],["class","summary-detail",4,"ngIf"],[1,"totals-card"],[1,"mb-3"],["formControlName","gst_type",1,"form-select"],["value","none"],[1,"my-3"],[1,"totals-row"],[1,"totals-row","align-items-center"],[1,"tax-label"],[1,"totals-input-group"],["type","number","formControlName","cgst_pct","placeholder","0",1,"form-control","totals-input","text-center",3,"input","readonly"],[1,"tax-amount-label"],["type","number","formControlName","sgst_pct","placeholder","0",1,"form-control","totals-input","text-center",3,"input","readonly"],["type","number","formControlName","igst_pct","placeholder","0",1,"form-control","totals-input","text-center",3,"input","readonly"],[1,"totals-row","text-muted","small"],[1,"totals-row","grand-total"],[1,"action-toolbar"],["type","button",1,"btn","btn-success",3,"click"],[1,"bi","bi-cloud-arrow-up-fill"],["type","button",1,"btn","btn-primary",3,"click","disabled"],[1,"bi","bi-file-earmark-pdf"],["type","button",1,"btn","btn-outline-primary",3,"click","disabled"],[1,"bi","bi-file-earmark-arrow-down"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"bi","bi-arrow-counterclockwise"],["class","modal-backdrop",4,"ngIf"],["id","vehicle-options"],["id","material-options"],[1,"text-danger","mt-1","small","fw-semibold"],[3,"value"],[3,"formGroupName"],["data-label","Date"],["type","date","formControlName","item_date",1,"form-control"],["data-label","Vehicle No"],["formControlName","vehicle","placeholder","TN-01-XX-0000","list","vehicle-options",1,"form-control"],["data-label","Material"],["formControlName","material","placeholder","e.g. M-Sand / Metal","list","material-options",1,"form-control"],["data-label","DC Number"],["formControlName","dc_no","placeholder","DC-101",1,"form-control"],["data-label","Qty"],["type","number","formControlName","qty",1,"form-control",3,"input"],["data-label","Rate"],["type","number","formControlName","rate",1,"form-control",3,"input"],["data-label","Amount"],["readonly","","formControlName","amount","placeholder","0.00",1,"form-control","amount-box","text-end"],["data-label","Action",1,"text-center"],["type","button","title","Remove item row",1,"btn","btn-outline-danger","btn-sm","btn-icon",3,"click","disabled"],[1,"bi","bi-trash-fill"],[1,"summary-detail"],[1,"modal-backdrop"],[1,"modal-container"],[1,"modal-header-custom"],[1,"bi","bi-building-gear","text-primary"],[1,"ms-2"],["type","button",1,"btn-close-custom",3,"click"],[1,"bi","bi-x-lg"],[1,"row","g-3",3,"ngSubmit","formGroup"],[1,"col-12"],["formControlName","name","placeholder","e.g. SARAVANA ENTERPRISES",1,"form-control"],["rows","3","formControlName","address","placeholder","Company business address...",1,"form-control"],["formControlName","gstin","placeholder","e.g. 33BBMPS6356P1ZR",1,"form-control","text-uppercase","font-monospace"],["formControlName","phone","placeholder","e.g. 9884878988",1,"form-control"],[1,"col-12","d-flex","justify-content-end","gap-2","border-top","pt-3","mt-4"],["type","submit",1,"btn","btn-success"]],template:function(t,l){if(t&1&&(i(0,"div",0)(1,"div")(2,"h1",1),o(3,"Create Invoice"),e(),i(4,"p",2),o(5,"Generate new client invoices, record line items, and export records"),e()()(),i(6,"form",3),h("ngSubmit",function(c){return c.preventDefault()}),i(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"h6",9),o(13,"Invoice Information"),e(),i(14,"button",10),h("click",function(){return l.openSellerModal()}),m(15,"i",11),i(16,"span"),o(17,"Seller Profile Settings"),e()()(),i(18,"div",12)(19,"label",13),o(20,"Bill Number *"),e(),i(21,"div",14),m(22,"input",15),i(23,"button",16),h("click",function(){return l.loadBill()}),m(24,"i",17),e()(),v(25,et,2,0,"div",18),e(),i(26,"div",12)(27,"label",13),o(28,"Bill Date *"),e(),m(29,"input",19),v(30,it,2,0,"div",18),e(),i(31,"div",20)(32,"label",13),o(33,"Select Customer *"),e(),i(34,"select",21)(35,"option",22),o(36,"Choose Customer Company..."),e(),v(37,nt,2,2,"option",23),e(),v(38,lt,2,0,"div",18),e()()(),i(39,"div",24)(40,"h5",25),m(41,"i",26),o(42,"Invoice Items List "),e(),i(43,"div",27)(44,"table",28)(45,"thead")(46,"tr")(47,"th",29),o(48,"Date"),e(),i(49,"th",30),o(50,"Vehicle No"),e(),i(51,"th",31),o(52,"Material"),e(),i(53,"th",32),o(54,"DC Number"),e(),i(55,"th",32),o(56,"Qty"),e(),i(57,"th",33),o(58,"Rate"),e(),i(59,"th",29),o(60,"Amount"),e(),m(61,"th",34),e()(),i(62,"tbody",35),v(63,ot,18,2,"tr",36),e()()(),i(64,"div",37)(65,"button",38),h("click",function(){return l.addItemRow()}),m(66,"i",39),i(67,"span"),o(68,"Add Item Row"),e()()()(),i(69,"div",24)(70,"label",13),o(71,"Invoice Remarks / Special Instructions"),e(),m(72,"textarea",40),e()(),i(73,"div",41)(74,"div",42)(75,"div",43)(76,"div",44),o(77,"Invoice Total"),e(),i(78,"div",45),o(79),C(80,"number"),e(),v(81,rt,2,1,"div",46),e(),i(82,"div",47)(83,"h5",25),o(84,"Taxes & Summary"),e(),i(85,"div",48)(86,"label",13),o(87,"GST Formula"),e(),i(88,"select",49)(89,"option",50),o(90,"Custom / No Tax (0%)"),e()()(),m(91,"hr",51),i(92,"div",52)(93,"span"),o(94,"Sub Total"),e(),i(95,"strong"),o(96),C(97,"number"),e()(),i(98,"div",53)(99,"span",54),o(100,"CGST (%)"),e(),i(101,"div",55)(102,"input",56),h("input",function(){return l.calculateTotals()}),e(),i(103,"span",57),o(104),C(105,"number"),e()()(),i(106,"div",53)(107,"span",54),o(108,"SGST (%)"),e(),i(109,"div",55)(110,"input",58),h("input",function(){return l.calculateTotals()}),e(),i(111,"span",57),o(112),C(113,"number"),e()()(),i(114,"div",53)(115,"span",54),o(116,"IGST (%)"),e(),i(117,"div",55)(118,"input",59),h("input",function(){return l.calculateTotals()}),e(),i(119,"span",57),o(120),C(121,"number"),e()()(),i(122,"div",60)(123,"span"),o(124,"Tax Amount"),e(),i(125,"span"),o(126),C(127,"number"),e()(),i(128,"div",61)(129,"span"),o(130,"Grand Total"),e(),i(131,"strong"),o(132),C(133,"number"),e()()()()()(),i(134,"div",62)(135,"button",63),h("click",function(){return l.saveBill()}),m(136,"i",64),i(137,"span"),o(138),e()(),i(139,"button",65),h("click",function(){return l.downloadPdf()}),m(140,"i",66),i(141,"span"),o(142,"Download PDF"),e()(),i(143,"button",67),h("click",function(){return l.downloadExcel()}),m(144,"i",68),i(145,"span"),o(146,"Download Bill CSV"),e()(),i(147,"button",69),h("click",function(){return l.resetForm()}),m(148,"i",70),i(149,"span"),o(150,"New Invoice Form"),e()()()(),v(151,at,31,1,"div",71),i(152,"datalist",72),v(153,st,1,1,"option",23),e(),i(154,"datalist",73),v(155,mt,1,1,"option",23),e()),t&2){let r,c,f,b,g,a,p,S,P;s(6),u("formGroup",l.billForm),s(19),u("ngIf",((r=l.billForm.get("bill_no"))==null?null:r.touched)&&((r=l.billForm.get("bill_no"))==null?null:r.invalid)),s(5),u("ngIf",((c=l.billForm.get("bill_date"))==null?null:c.touched)&&((c=l.billForm.get("bill_date"))==null?null:c.invalid)),s(7),u("ngForOf",l.customers),s(),u("ngIf",((f=l.billForm.get("customer_id"))==null?null:f.touched)&&((f=l.billForm.get("customer_id"))==null?null:f.invalid)),s(25),u("ngForOf",l.items.controls),s(16),y("\u20B9",w(80,23,l.grandTotal,"1.2-2"),""),s(2),u("ngIf",l.items.length>0),s(15),y("\u20B9",w(97,26,l.subtotal,"1.2-2"),""),s(6),u("readonly",((b=l.billForm.get("gst_type"))==null?null:b.value)!=="none"),s(2),y("\u20B9",w(105,29,(g=l.billForm.get("cgst"))==null?null:g.value,"1.2-2"),""),s(6),u("readonly",((a=l.billForm.get("gst_type"))==null?null:a.value)!=="none"),s(2),y("\u20B9",w(113,32,(p=l.billForm.get("sgst"))==null?null:p.value,"1.2-2"),""),s(6),u("readonly",((S=l.billForm.get("gst_type"))==null?null:S.value)!=="none"),s(2),y("\u20B9",w(121,35,(P=l.billForm.get("igst"))==null?null:P.value,"1.2-2"),""),s(6),y("\u20B9",w(127,38,l.taxAmount,"1.2-2"),""),s(6),y("\u20B9",w(133,41,l.grandTotal,"1.2-2"),""),s(6),O(l.loadedBillNo?"Update Invoice Record":"Save Invoice Record"),s(),u("disabled",!l.loadedBillNo),s(4),u("disabled",!l.loadedBillNo),s(8),u("ngIf",l.showSellerModal),s(2),u("ngForOf",l.vehicles),s(2),u("ngForOf",l.materials)}},dependencies:[V,T,k,I,J,D,Q,Z,$,G,W,R,j,z,U,q,L],styles:[".bill-meta-card[_ngcontent-%COMP%]{padding:20px;background-color:var(--surface)}.table-bill-items[_ngcontent-%COMP%]{margin-top:10px}.table-bill-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 8px;font-size:11px}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:4px}.table-bill-items[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:1px solid transparent;box-shadow:none;background-color:transparent;border-radius:6px;padding:6px 10px}.table-bill-items[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:var(--primary);background-color:var(--surface);box-shadow:var(--shadow-sm)}.table-bill-items[_ngcontent-%COMP%]   .amount-box[_ngcontent-%COMP%]{background-color:var(--bg-light);font-weight:700;color:var(--text-primary)}.table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]::-webkit-outer-spin-button, .table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]{-moz-appearance:textfield}.totals-card[_ngcontent-%COMP%]{background-color:var(--bg-light);border:1px solid var(--border);border-radius:14px;padding:24px}.totals-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-size:14px}.totals-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.totals-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;color:var(--text-secondary);flex-shrink:0}.tax-label[_ngcontent-%COMP%]{font-weight:600;color:var(--text-secondary);flex-shrink:0;display:inline-block;min-width:90px}.totals-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px;color:var(--text-primary)}.totals-row[_ngcontent-%COMP%]   .totals-input[_ngcontent-%COMP%]{width:75px;text-align:center;padding:6px 8px;flex-shrink:0}.totals-row.grand-total[_ngcontent-%COMP%]{margin-top:16px;padding-top:16px;border-top:1.5px dashed var(--border)}.totals-row.grand-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:var(--text-primary)}.totals-row.grand-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:22px;color:var(--primary)}.action-toolbar[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:flex-end;margin-top:30px;padding-top:20px;border-top:1px solid var(--border)}.summary-sidebar[_ngcontent-%COMP%]{background-color:var(--surface);border:1.5px solid var(--primary);border-radius:16px;padding:24px;box-shadow:var(--shadow-md);text-align:center}.sticky-sidebar-container[_ngcontent-%COMP%]{position:sticky;top:100px}@media(max-width:991.98px){.sticky-sidebar-container[_ngcontent-%COMP%]{position:static!important}}.summary-title[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}.summary-value[_ngcontent-%COMP%]{font-size:clamp(20px,2.5vw,32px);font-weight:800;color:var(--primary);word-break:normal}.summary-detail[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);margin-top:6px}.totals-input-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;justify-content:flex-end;flex:1;max-width:65%}.tax-amount-label[_ngcontent-%COMP%]{font-weight:600;color:var(--text-primary);min-width:80px;text-align:right}@media(max-width:767px){.table-bill-items[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none!important}.table-bill-items[_ngcontent-%COMP%], .table-bill-items[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table-bill-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block!important;width:100%!important}.table-bill-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:var(--surface)!important;border:1px solid var(--border)!important;border-radius:12px!important;margin-bottom:20px!important;padding:12px 16px!important;box-shadow:var(--shadow-sm)!important}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:8px 0!important;border-bottom:1px solid var(--border)!important;background-color:transparent!important}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:none!important;justify-content:flex-end!important;padding-top:12px!important}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);font-weight:700;font-size:12px;color:var(--text-secondary);text-transform:uppercase;flex:1;text-align:left}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{max-width:60%!important;background-color:var(--bg-light)!important;border:1px solid var(--border)!important;text-align:left!important;padding:6px 10px!important;border-radius:6px!important}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .amount-box[_ngcontent-%COMP%]{text-align:right!important;font-weight:700!important;border:none!important;background-color:transparent!important}.action-toolbar[_ngcontent-%COMP%]{flex-wrap:wrap!important;justify-content:center!important;gap:8px!important}.action-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%!important}}"]})};export{tt as BillFormComponent};
