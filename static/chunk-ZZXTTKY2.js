import{a as H}from"./chunk-ZDVINK2N.js";import{a as W}from"./chunk-TKOON2AY.js";import{a as $,b as h,c as R,d as G,f as D,g as j,h as z,i as q,j as L,k as U,l as J,m as K,n as Q,o as X,q as Z}from"./chunk-77FSFZ7B.js";import{a as A}from"./chunk-JQ65RHU4.js";import{$a as o,Cb as k,Da as T,Db as I,Gb as O,Ha as x,Hb as V,Oa as c,Ra as i,Sa as t,Ta as s,Ua as E,Va as p,Wa as f,Z as y,_ as C,ab as M,bb as _,hb as S,jb as w,ua as a,ya as B}from"./chunk-EQL4FING.js";function tt(d,n){d&1&&(i(0,"div",70),o(1," Bill Number is required. "),t())}function et(d,n){d&1&&(i(0,"div",70),o(1," Date is required. "),t())}function it(d,n){if(d&1&&(i(0,"option",71),o(1),t()),d&2){let e=n.$implicit;c("value",e.id),a(),_(" ",e.customer_name," ")}}function lt(d,n){d&1&&(i(0,"div",70),o(1," Customer selection is required. "),t())}function nt(d,n){if(d&1){let e=E();i(0,"tr",72)(1,"td"),s(2,"input",73),t(),i(3,"td"),s(4,"input",74),t(),i(5,"td"),s(6,"input",75),t(),i(7,"td"),s(8,"input",76),t(),i(9,"td")(10,"input",77),p("input",function(){let r=y(e).index,m=f();return C(m.calculateRow(r))}),t()(),i(11,"td")(12,"input",78),p("input",function(){let r=y(e).index,m=f();return C(m.calculateRow(r))}),t()(),i(13,"td"),s(14,"input",79),t(),i(15,"td",80)(16,"button",81),p("click",function(){let r=y(e).index,m=f();return C(m.removeItemRow(r))}),s(17,"i",82),t()()()}if(d&2){let e=n.index,l=f();c("formGroupName",e),a(16),c("disabled",l.items.length<=1)}}function ot(d,n){if(d&1&&(i(0,"div",83),o(1),t()),d&2){let e=f();a(),_(" ",e.items.length," line item(s) included ")}}function rt(d,n){if(d&1){let e=E();i(0,"div",84)(1,"div",85)(2,"div",86)(3,"h3"),s(4,"i",87),i(5,"span",88),o(6,"Seller Company Settings"),t()(),i(7,"button",89),p("click",function(){y(e);let r=f();return C(r.closeSellerModal())}),s(8,"i",90),t()(),i(9,"form",91),p("ngSubmit",function(){y(e);let r=f();return C(r.submitSellerProfile())}),i(10,"div",92)(11,"label",13),o(12,"Company / Seller Name *"),t(),s(13,"input",93),t(),i(14,"div",92)(15,"label",13),o(16,"Company Address *"),t(),s(17,"textarea",94),t(),i(18,"div",20)(19,"label",13),o(20,"GSTIN *"),t(),s(21,"input",95),t(),i(22,"div",20)(23,"label",13),o(24,"Cell / Contact Phone *"),t(),s(25,"input",96),t(),i(26,"div",97)(27,"button",67),p("click",function(){y(e);let r=f();return C(r.closeSellerModal())}),o(28,"Cancel"),t(),i(29,"button",98),o(30,"Save Business Profile"),t()()()()()}if(d&2){let e=f();a(9),c("formGroup",e.sellerForm)}}var Y=class d{constructor(n,e,l,r){this.fb=n;this.customerService=e;this.billService=l;this.toast=r}fb;customerService;billService;toast;customers=[];billForm;sellerForm;loadedBillNo;showSellerModal=!1;ngOnInit(){this.initializeForm(),this.loadCustomers(),this.addItemRow(),this.fetchNextBillNo()}initializeForm(){this.billForm=this.fb.group({bill_no:["",[h.required,h.min(1)]],bill_date:[new Date().toISOString().split("T")[0],h.required],customer_id:["",h.required],gst_type:["none"],cgst_pct:[0],sgst_pct:[0],igst_pct:[0],cgst:[0],sgst:[0],igst:[0],notes:[""],items:this.fb.array([])});let n=this.getSellerProfile();this.sellerForm=this.fb.group({name:[n.name,h.required],address:[n.address,h.required],gstin:[n.gstin,h.required],phone:[n.phone,h.required]}),this.billForm.get("gst_type")?.valueChanges.subscribe(e=>{e==="none"?this.billForm.patchValue({cgst_pct:0,sgst_pct:0,igst_pct:0,cgst:0,sgst:0,igst:0},{emitEvent:!1}):this.calculateTotals()})}get items(){return this.billForm.get("items")}createItemRow(){return this.fb.group({item_date:[new Date().toISOString().split("T")[0]],vehicle:[""],material:[""],dc_no:[""],qty:[0,[h.min(0)]],rate:[0,[h.min(0)]],amount:[0]})}addItemRow(){this.items.push(this.createItemRow())}removeItemRow(n){this.items.removeAt(n),this.calculateTotals()}loadCustomers(){this.customerService.getCustomers().subscribe(n=>{this.customers=n})}calculateRow(n){let e=this.items.at(n),l=Number(e.get("qty")?.value||0),r=Number(e.get("rate")?.value||0);e.patchValue({amount:Math.round(l*r*100)/100},{emitEvent:!1}),this.calculateTotals()}get subtotal(){let n=0;return this.items.controls.forEach(e=>{n+=Number(e.get("amount")?.value||0)}),n}get taxAmount(){return Number(this.billForm.value.cgst||0)+Number(this.billForm.value.sgst||0)+Number(this.billForm.value.igst||0)}get grandTotal(){return this.subtotal+this.taxAmount}calculateTotals(){let n=this.subtotal,e=this.billForm.get("gst_type")?.value||"none";if(e==="cgst_sgst"){let l=Math.round(n*.09*100)/100;this.billForm.patchValue({cgst_pct:9,sgst_pct:9,igst_pct:0,cgst:l,sgst:l,igst:0},{emitEvent:!1})}else if(e==="igst"){let l=Math.round(n*.18*100)/100;this.billForm.patchValue({cgst_pct:0,sgst_pct:0,igst_pct:18,cgst:0,sgst:0,igst:l},{emitEvent:!1})}else if(e==="none"){let l=Number(this.billForm.get("cgst_pct")?.value||0),r=Number(this.billForm.get("sgst_pct")?.value||0),m=Number(this.billForm.get("igst_pct")?.value||0),g=Math.round(n*(l/100)*100)/100,b=Math.round(n*(r/100)*100)/100,v=Math.round(n*(m/100)*100)/100;this.billForm.patchValue({cgst:g,sgst:b,igst:v},{emitEvent:!1})}}getSellerProfile(){let n={name:"SARAVANA ENTERPRISES",address:"No 68, Kodoor Panchayat, Vellodai Road, Krishnapuram, Ponneri, Tamil Nadu, 601204",gstin:"33BBMPS6356P1ZR",phone:"9884878988"};if(typeof window>"u"||typeof localStorage>"u")return n;let e=localStorage.getItem("seller_profile");return e?JSON.parse(e):n}openSellerModal(){let n=this.getSellerProfile();this.sellerForm.patchValue(n),this.showSellerModal=!0}closeSellerModal(){this.showSellerModal=!1}submitSellerProfile(){if(this.sellerForm.invalid){this.sellerForm.markAllAsTouched();return}typeof localStorage<"u"&&localStorage.setItem("seller_profile",JSON.stringify(this.sellerForm.value)),this.showSellerModal=!1,this.toast.success("Seller profile updated successfully.")}saveBill(){if(this.billForm.invalid){this.billForm.markAllAsTouched(),this.toast.warning("Please fill in all required bill details.");return}let n=this.billForm.value;if(this.loadedBillNo){this.billService.updateBill(this.loadedBillNo,n).subscribe(e=>{this.toast.success("Bill updated successfully!"),this.loadedBillNo=e.bill_no},e=>{let l=e.error?.detail||"Failed to update bill.";this.toast.error(l)});return}this.billService.createBill(n).subscribe(e=>{this.loadedBillNo=e.bill_no,this.billForm.patchValue({bill_no:e.bill_no}),this.toast.success("Bill created successfully!")},e=>{let l=e.error?.detail||"Failed to create bill.";this.toast.error(l)})}loadBill(){let n=Number(this.billForm.value.bill_no);if(!n){this.toast.warning("Please enter a valid Bill Number to load.");return}this.billService.getBill(n).subscribe(e=>{this.loadedBillNo=e.bill_no,this.items.clear(),e.items.forEach(v=>{this.items.push(this.fb.group(v))});let l="none";e.igst&&e.igst>0?l="igst":(e.cgst&&e.cgst>0||e.sgst&&e.sgst>0)&&(l="cgst_sgst");let r=e.subtotal||1,m=e.cgst?Math.round(e.cgst/r*1e4)/100:0,g=e.sgst?Math.round(e.sgst/r*1e4)/100:0,b=e.igst?Math.round(e.igst/r*1e4)/100:0;this.billForm.patchValue({bill_no:e.bill_no,bill_date:e.bill_date,customer_id:e.customer_id||e.customer?.id,gst_type:l,cgst_pct:m,sgst_pct:g,igst_pct:b,cgst:e.cgst||0,sgst:e.sgst||0,igst:e.igst||0,notes:e.notes||""}),this.toast.success(`Bill #${n} loaded successfully.`)},e=>{this.toast.error(`Bill #${n} not found.`)})}downloadExcel(){this.loadedBillNo&&this.billService.downloadExcel(this.loadedBillNo).subscribe(n=>{let e=window.URL.createObjectURL(n),l=document.createElement("a");l.href=e;let r=n.type.includes("csv");l.download=`Bill_${this.loadedBillNo}${r?".csv":".xlsx"}`,l.click(),window.URL.revokeObjectURL(e)})}downloadPdf(){if(!this.loadedBillNo){this.toast.warning("Please save the bill first before downloading PDF.");return}let n=this.customers.find(u=>u.id===Number(this.billForm.value.customer_id)),e=n?n.customer_name:"Unknown Customer",l=n&&n.address||"&mdash;",r=n&&n.gst_number||"&mdash;",m=this.getSellerProfile(),g=this.billForm.value.items||[],b=u=>Number(u||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),v=u=>"\u20B9 "+b(u),F=window.open("","_blank");if(!F){this.toast.error("Popup blocker is active. Please allow popups to download PDF.");return}F.document.write(`
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
            <div class="seller-title">${m.name}</div>
            <div class="seller-text">
              ${m.address.replace(/\n/g,"<br>")}<br><br>
              <strong>GSTIN:</strong> ${m.gstin}<br>
              <strong>Cell:</strong> ${m.phone}
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
                <td>${e}</td>
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
            ${g.map((u,N)=>`
              <tr>
                <td class="text-center">${N+1}</td>
                <td>${u.item_date||""}</td>
                <td>${u.vehicle||""}</td>
                <td>${u.material||""}</td>
                <td>${u.dc_no||""}</td>
                <td class="text-right">${u.qty||0}</td>
                <td class="text-right">${b(u.rate)}</td>
                <td class="text-right">${v(u.amount)}</td>
              </tr>
            `).join("")}
            
            <!-- Generate blank rows to fill visual grid up to 12 rows exactly like spreadsheet -->
            ${Array(Math.max(0,12-g.length)).fill(0).map((u,N)=>`
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
            <div style="white-space: pre-line;">${this.billForm.value.notes||"Please remit payment as per invoice details."}</div>
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
              <td class="text-right">${v(this.grandTotal)}</td>
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
    `),F.document.close()}resetForm(){this.loadedBillNo=void 0,this.items.clear(),this.billForm.reset(),this.billForm.patchValue({bill_date:new Date().toISOString().split("T")[0],gst_type:"none",cgst_pct:0,sgst_pct:0,igst_pct:0,cgst:0,sgst:0,igst:0}),this.addItemRow(),this.fetchNextBillNo()}fetchNextBillNo(){this.billService.getNextBillNo().subscribe({next:n=>{this.billForm.patchValue({bill_no:n.next_bill_no})},error:n=>{console.error("Failed to fetch next bill number:",n)}})}static \u0275fac=function(e){return new(e||d)(B(X),B(W),B(H),B(A))};static \u0275cmp=T({type:d,selectors:[["app-bill-form"]],decls:151,vars:42,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-4","flex-wrap","gap-3"],[1,"page-title","mb-1"],[1,"text-secondary","mb-0"],[3,"ngSubmit","formGroup"],[1,"row","g-4"],[1,"col-lg-9"],[1,"card-custom","mb-4","bill-meta-card"],[1,"row","g-3"],[1,"col-12","d-flex","justify-content-between","align-items-center","mb-2"],[1,"section-title","mb-0"],["type","button",1,"btn","btn-outline-secondary","btn-sm",3,"click"],[1,"bi","bi-gear-fill"],[1,"col-sm-6","col-md-3"],[1,"form-label"],[1,"input-group"],["type","number","formControlName","bill_no","placeholder","Enter Bill No",1,"form-control"],["type","button","title","Search Bill",1,"btn","btn-outline-primary",3,"click"],[1,"bi","bi-search"],["class","text-danger mt-1 small fw-semibold",4,"ngIf"],["type","date","formControlName","bill_date",1,"form-control"],[1,"col-md-6"],["formControlName","customer_id",1,"form-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"card-custom","mb-4"],[1,"section-title","mb-3"],[1,"bi","bi-list-stars","me-2","text-primary"],[1,"table-responsive"],[1,"table","align-middle","table-bill-items"],["width","120"],["width","150"],["width","140"],["width","100"],["width","110"],["width","40",1,"text-center"],["formArrayName","items"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"mt-3"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"bi","bi-plus-lg"],["rows","3","formControlName","notes","placeholder","Add terms, bank details, or delivery notes here...",1,"form-control"],[1,"col-lg-3"],[1,"summary-sidebar","mb-4"],[1,"summary-title"],[1,"summary-value"],["class","summary-detail",4,"ngIf"],[1,"totals-card"],[1,"mb-3"],["formControlName","gst_type",1,"form-select"],["value","none"],[1,"my-3"],[1,"totals-row"],[1,"totals-row","align-items-center"],[1,"d-flex","align-items-center","gap-2",2,"width","60%"],["type","number","formControlName","cgst_pct","placeholder","0",1,"form-control","totals-input","text-center",2,"max-width","80px",3,"input","readonly"],[1,"ms-auto","fw-semibold"],["type","number","formControlName","sgst_pct","placeholder","0",1,"form-control","totals-input","text-center",2,"max-width","80px",3,"input","readonly"],["type","number","formControlName","igst_pct","placeholder","0",1,"form-control","totals-input","text-center",2,"max-width","80px",3,"input","readonly"],[1,"totals-row","text-muted","small"],[1,"totals-row","grand-total"],[1,"action-toolbar"],["type","button",1,"btn","btn-success",3,"click"],[1,"bi","bi-cloud-arrow-up-fill"],["type","button",1,"btn","btn-primary",3,"click","disabled"],[1,"bi","bi-file-earmark-pdf"],["type","button",1,"btn","btn-outline-primary",3,"click","disabled"],[1,"bi","bi-file-earmark-arrow-down"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"bi","bi-arrow-counterclockwise"],["class","modal-backdrop",4,"ngIf"],[1,"text-danger","mt-1","small","fw-semibold"],[3,"value"],[3,"formGroupName"],["type","date","formControlName","item_date",1,"form-control"],["formControlName","vehicle","placeholder","TN-01-XX-0000",1,"form-control"],["formControlName","material","placeholder","e.g. M-Sand / Metal",1,"form-control"],["formControlName","dc_no","placeholder","DC-101",1,"form-control"],["type","number","formControlName","qty",1,"form-control",3,"input"],["type","number","formControlName","rate",1,"form-control",3,"input"],["readonly","","formControlName","amount","placeholder","0.00",1,"form-control","amount-box","text-end"],[1,"text-center"],["type","button","title","Remove item row",1,"btn","btn-outline-danger","btn-sm","btn-icon",3,"click","disabled"],[1,"bi","bi-trash-fill"],[1,"summary-detail"],[1,"modal-backdrop"],[1,"modal-container"],[1,"modal-header-custom"],[1,"bi","bi-building-gear","text-primary"],[1,"ms-2"],["type","button",1,"btn-close-custom",3,"click"],[1,"bi","bi-x-lg"],[1,"row","g-3",3,"ngSubmit","formGroup"],[1,"col-12"],["formControlName","name","placeholder","e.g. SARAVANA ENTERPRISES",1,"form-control"],["rows","3","formControlName","address","placeholder","Company business address...",1,"form-control"],["formControlName","gstin","placeholder","e.g. 33BBMPS6356P1ZR",1,"form-control","text-uppercase","font-monospace"],["formControlName","phone","placeholder","e.g. 9884878988",1,"form-control"],[1,"col-12","d-flex","justify-content-end","gap-2","border-top","pt-3","mt-4"],["type","submit",1,"btn","btn-success"]],template:function(e,l){if(e&1&&(i(0,"div",0)(1,"div")(2,"h1",1),o(3,"Create Invoice"),t(),i(4,"p",2),o(5,"Generate new client invoices, record line items, and export records"),t()()(),i(6,"form",3),p("ngSubmit",function(m){return m.preventDefault()}),i(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"h6",9),o(13,"Invoice Information"),t(),i(14,"button",10),p("click",function(){return l.openSellerModal()}),s(15,"i",11),i(16,"span"),o(17,"Seller Profile Settings"),t()()(),i(18,"div",12)(19,"label",13),o(20,"Bill Number *"),t(),i(21,"div",14),s(22,"input",15),i(23,"button",16),p("click",function(){return l.loadBill()}),s(24,"i",17),t()(),x(25,tt,2,0,"div",18),t(),i(26,"div",12)(27,"label",13),o(28,"Bill Date *"),t(),s(29,"input",19),x(30,et,2,0,"div",18),t(),i(31,"div",20)(32,"label",13),o(33,"Select Customer *"),t(),i(34,"select",21)(35,"option",22),o(36,"Choose Customer Company..."),t(),x(37,it,2,2,"option",23),t(),x(38,lt,2,0,"div",18),t()()(),i(39,"div",24)(40,"h5",25),s(41,"i",26),o(42,"Invoice Items List "),t(),i(43,"div",27)(44,"table",28)(45,"thead")(46,"tr")(47,"th",29),o(48,"Date"),t(),i(49,"th",30),o(50,"Vehicle No"),t(),i(51,"th",31),o(52,"Material"),t(),i(53,"th",32),o(54,"DC Number"),t(),i(55,"th",32),o(56,"Qty"),t(),i(57,"th",33),o(58,"Rate"),t(),i(59,"th",29),o(60,"Amount"),t(),s(61,"th",34),t()(),i(62,"tbody",35),x(63,nt,18,2,"tr",36),t()()(),i(64,"div",37)(65,"button",38),p("click",function(){return l.addItemRow()}),s(66,"i",39),i(67,"span"),o(68,"Add Item Row"),t()()()(),i(69,"div",24)(70,"label",13),o(71,"Invoice Remarks / Special Instructions"),t(),s(72,"textarea",40),t()(),i(73,"div",41)(74,"div",42)(75,"div",43),o(76,"Invoice Total"),t(),i(77,"div",44),o(78),S(79,"number"),t(),x(80,ot,2,1,"div",45),t(),i(81,"div",46)(82,"h5",25),o(83,"Taxes & Summary"),t(),i(84,"div",47)(85,"label",13),o(86,"GST Formula"),t(),i(87,"select",48)(88,"option",49),o(89,"Custom / No Tax (0%)"),t()()(),s(90,"hr",50),i(91,"div",51)(92,"span"),o(93,"Sub Total"),t(),i(94,"strong"),o(95),S(96,"number"),t()(),i(97,"div",52)(98,"span"),o(99,"CGST (%)"),t(),i(100,"div",53)(101,"input",54),p("input",function(){return l.calculateTotals()}),t(),i(102,"span",55),o(103),S(104,"number"),t()()(),i(105,"div",52)(106,"span"),o(107,"SGST (%)"),t(),i(108,"div",53)(109,"input",56),p("input",function(){return l.calculateTotals()}),t(),i(110,"span",55),o(111),S(112,"number"),t()()(),i(113,"div",52)(114,"span"),o(115,"IGST (%)"),t(),i(116,"div",53)(117,"input",57),p("input",function(){return l.calculateTotals()}),t(),i(118,"span",55),o(119),S(120,"number"),t()()(),i(121,"div",58)(122,"span"),o(123,"Tax Amount"),t(),i(124,"span"),o(125),S(126,"number"),t()(),i(127,"div",59)(128,"span"),o(129,"Grand Total"),t(),i(130,"strong"),o(131),S(132,"number"),t()()()()(),i(133,"div",60)(134,"button",61),p("click",function(){return l.saveBill()}),s(135,"i",62),i(136,"span"),o(137),t()(),i(138,"button",63),p("click",function(){return l.downloadPdf()}),s(139,"i",64),i(140,"span"),o(141,"Download PDF"),t()(),i(142,"button",65),p("click",function(){return l.downloadExcel()}),s(143,"i",66),i(144,"span"),o(145,"Download Bill CSV"),t()(),i(146,"button",67),p("click",function(){return l.resetForm()}),s(147,"i",68),i(148,"span"),o(149,"New Invoice Form"),t()()()(),x(150,rt,31,1,"div",69)),e&2){let r,m,g,b,v,F,u,N,P;a(6),c("formGroup",l.billForm),a(19),c("ngIf",((r=l.billForm.get("bill_no"))==null?null:r.touched)&&((r=l.billForm.get("bill_no"))==null?null:r.invalid)),a(5),c("ngIf",((m=l.billForm.get("bill_date"))==null?null:m.touched)&&((m=l.billForm.get("bill_date"))==null?null:m.invalid)),a(7),c("ngForOf",l.customers),a(),c("ngIf",((g=l.billForm.get("customer_id"))==null?null:g.touched)&&((g=l.billForm.get("customer_id"))==null?null:g.invalid)),a(25),c("ngForOf",l.items.controls),a(15),_("\u20B9",w(79,21,l.grandTotal,"1.2-2"),""),a(2),c("ngIf",l.items.length>0),a(15),_("\u20B9",w(96,24,l.subtotal,"1.2-2"),""),a(6),c("readonly",((b=l.billForm.get("gst_type"))==null?null:b.value)!=="none"),a(2),_("\u20B9",w(104,27,(v=l.billForm.get("cgst"))==null?null:v.value,"1.2-2"),""),a(6),c("readonly",((F=l.billForm.get("gst_type"))==null?null:F.value)!=="none"),a(2),_("\u20B9",w(112,30,(u=l.billForm.get("sgst"))==null?null:u.value,"1.2-2"),""),a(6),c("readonly",((N=l.billForm.get("gst_type"))==null?null:N.value)!=="none"),a(2),_("\u20B9",w(120,33,(P=l.billForm.get("igst"))==null?null:P.value,"1.2-2"),""),a(6),_("\u20B9",w(126,36,l.taxAmount,"1.2-2"),""),a(6),_("\u20B9",w(132,39,l.grandTotal,"1.2-2"),""),a(6),M(l.loadedBillNo?"Update Invoice Record":"Save Invoice Record"),a(),c("disabled",!l.loadedBillNo),a(4),c("disabled",!l.loadedBillNo),a(8),c("ngIf",l.showSellerModal)}},dependencies:[V,k,I,O,Z,D,K,Q,$,j,J,R,G,z,U,q,L],styles:[".bill-meta-card[_ngcontent-%COMP%]{padding:20px;background-color:var(--surface)}.table-bill-items[_ngcontent-%COMP%]{margin-top:10px}.table-bill-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 8px;font-size:11px}.table-bill-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:4px}.table-bill-items[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:1px solid transparent;box-shadow:none;background-color:transparent;border-radius:6px;padding:6px 10px}.table-bill-items[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:var(--primary);background-color:var(--surface);box-shadow:var(--shadow-sm)}.table-bill-items[_ngcontent-%COMP%]   .amount-box[_ngcontent-%COMP%]{background-color:var(--bg-light);font-weight:700;color:var(--text-primary)}.table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]::-webkit-outer-spin-button, .table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.table-bill-items[_ngcontent-%COMP%]   input[formControlName=rate][_ngcontent-%COMP%]{-moz-appearance:textfield}.totals-card[_ngcontent-%COMP%]{background-color:var(--bg-light);border:1px solid var(--border);border-radius:14px;padding:24px}.totals-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-size:14px}.totals-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.totals-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;color:var(--text-secondary)}.totals-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px;color:var(--text-primary)}.totals-row[_ngcontent-%COMP%]   .totals-input[_ngcontent-%COMP%]{width:140px;text-align:right;padding:6px 10px}.totals-row.grand-total[_ngcontent-%COMP%]{margin-top:16px;padding-top:16px;border-top:1.5px dashed var(--border)}.totals-row.grand-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:var(--text-primary)}.totals-row.grand-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:22px;color:var(--primary)}.action-toolbar[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:flex-end;margin-top:30px;padding-top:20px;border-top:1px solid var(--border)}.summary-sidebar[_ngcontent-%COMP%]{position:sticky;top:100px;background-color:var(--surface);border:1.5px solid var(--primary);border-radius:16px;padding:24px;box-shadow:var(--shadow-md);text-align:center}.summary-title[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}.summary-value[_ngcontent-%COMP%]{font-size:32px;font-weight:800;color:var(--primary);word-break:break-all}.summary-detail[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);margin-top:6px}"]})};export{Y as BillFormComponent};
