import{a as U}from"./chunk-XAO5CDKH.js";import{a as H}from"./chunk-ZDVINK2N.js";import{a as K}from"./chunk-JXB5ZUHI.js";import{a as J}from"./chunk-TKOON2AY.js";import{a as G,c as Q,e as W,p as q}from"./chunk-77FSFZ7B.js";import{a as z}from"./chunk-JQ65RHU4.js";import{$a as l,Bb as D,Cb as F,Da as L,Db as j,Fb as V,Gb as A,Ha as S,Hb as O,Oa as u,Ra as t,Sa as i,Ta as w,Ua as k,Va as C,Wa as x,Z as B,_ as E,ab as I,bb as p,db as N,eb as M,fb as P,hb as b,jb as g,ua as r,v as $,ya as T}from"./chunk-EQL4FING.js";function ee(a,n){if(a&1&&(t(0,"div",18)(1,"div",19)(2,"div",20)(3,"div",21),l(4,"Total Invoiced"),i(),t(5,"div",22),l(6),b(7,"number"),i()()(),t(8,"div",19)(9,"div",20)(10,"div",21),l(11,"Total Collected"),i(),t(12,"div",23),l(13),b(14,"number"),i()()(),t(15,"div",19)(16,"div",20)(17,"div",21),l(18,"Total Outstanding"),i(),t(19,"div",24),l(20),b(21,"number"),i()()(),t(22,"div",19)(23,"div",20)(24,"div",21),l(25,"Collection Rate"),i(),t(26,"div",25),l(27),b(28,"number"),i()()()()),a&2){let e=x();r(6),p("\u20B9",g(7,4,e.summary.total_revenue,"1.2-2"),""),r(7),p(" \u20B9",g(14,7,e.summary.total_revenue-e.summary.outstanding,"1.2-2")," "),r(7),p("\u20B9",g(21,10,e.summary.outstanding,"1.2-2"),""),r(7),p("",g(28,13,e.collectionRate,"1.1-1"),"%")}}function te(a,n){if(a&1&&(t(0,"span"),l(1),i()),a&2){let e=x();r(),p("Showing ",e.filteredTracker.length," invoice(s)")}}function ie(a,n){if(a&1&&(t(0,"span"),l(1),i()),a&2){let e=x();r(),p("Showing ",e.customerSummaries.length," customer(s)")}}function ne(a,n){if(a&1){let e=k();t(0,"tr")(1,"td")(2,"span",33),l(3),i()(),t(4,"td")(5,"div",34),l(6),i()(),t(7,"td",35),l(8),b(9,"number"),i(),t(10,"td",36)(11,"button",37),C("click",function(){let o=B(e).$implicit,m=x(2);return E(m.viewBillDetails(o.bill_no))}),w(12,"i",38),t(13,"span"),l(14,"View Info"),i()()(),t(15,"td",36)(16,"button",39),C("click",function(){let o=B(e).$implicit,m=x(2);return E(m.deleteBill(o.bill_no))}),w(17,"i",40),i()()()}if(a&2){let e=n.$implicit;r(3),p("#",e.bill_no,""),r(3),I(e.customer_name),r(2),p(" \u20B9",g(9,3,e.bill_amount,"1.2-2")," ")}}function le(a,n){a&1&&(t(0,"tr")(1,"td",41),w(2,"i",42),t(3,"span"),l(4,"No reports matched the search query."),i()()())}function re(a,n){if(a&1&&(t(0,"div",26)(1,"table",27)(2,"thead")(3,"tr")(4,"th",28),l(5,"Bill No"),i(),t(6,"th"),l(7,"Customer / Company"),i(),t(8,"th",29),l(9,"Bill Amount"),i(),t(10,"th",30),l(11,"Bill Info"),i(),t(12,"th",31),l(13,"Action"),i()()(),t(14,"tbody"),S(15,ne,18,6,"tr",32)(16,le,5,0,"tr",15),i()()()),a&2){let e=x();r(15),u("ngForOf",e.filteredTracker),r(),u("ngIf",e.filteredTracker.length===0)}}function ae(a,n){if(a&1){let e=k();t(0,"tr")(1,"td")(2,"div",34),l(3),i()(),t(4,"td",35),l(5),b(6,"number"),i(),t(7,"td",44),l(8),b(9,"number"),i(),t(10,"td",45)(11,"span",46),l(12),b(13,"number"),i()(),t(14,"td",36)(15,"button",47),C("click",function(){let o=B(e).$implicit,m=x(2);return E(m.viewCustomerLedger(o.customer_name))}),w(16,"i",48),t(17,"span"),l(18,"View Ledger"),i()()()()}if(a&2){let e=n.$implicit;r(3),I(e.customer_name),r(2),p(" \u20B9",g(6,5,e.total_bill_amount,"1.2-2")," "),r(3),p(" \u20B9",g(9,8,e.total_paid_amount,"1.2-2")," "),r(3),u("ngClass",e.balance_amount>0?"badge-danger":"badge-success"),r(),p(" \u20B9",g(13,11,e.balance_amount,"1.2-2")," ")}}function oe(a,n){a&1&&(t(0,"tr")(1,"td",49),w(2,"i",50),t(3,"span"),l(4,"No customer summary data matches search query."),i()()())}function se(a,n){if(a&1&&(t(0,"div",26)(1,"table",27)(2,"thead")(3,"tr")(4,"th"),l(5,"Customer / Company"),i(),t(6,"th",29),l(7,"Total Bill Amount"),i(),t(8,"th",29),l(9,"Total Payments"),i(),t(10,"th",29),l(11,"Outstanding Balance"),i(),t(12,"th",43),l(13,"Customer Ledger"),i()()(),t(14,"tbody"),S(15,ae,19,14,"tr",32)(16,oe,5,0,"tr",15),i()()()),a&2){let e=x();r(15),u("ngForOf",e.customerSummaries),r(),u("ngIf",e.customerSummaries.length===0)}}function de(a,n){if(a&1){let e=k();t(0,"button",61),C("click",function(){B(e);let o=x(2);return E(o.printBill())}),w(1,"i",62),t(2,"span"),l(3,"Print Invoice"),i()()}}function me(a,n){a&1&&(t(0,"div",63)(1,"div",64)(2,"span",65),l(3,"Loading..."),i()(),t(4,"p",66),l(5,"Fetching bill details..."),i()())}function ce(a,n){if(a&1&&(t(0,"div",98)(1,"span",77),l(2,"GSTIN:"),i(),t(3,"span",99),l(4),i()()),a&2){let e=x(3);r(4),I(e.selectedBill.customer==null?null:e.selectedBill.customer.gst_number)}}function pe(a,n){if(a&1&&(t(0,"div",98)(1,"span",77),l(2,"Mobile:"),i(),l(3),i()),a&2){let e=x(3);r(3),p(" ",e.selectedBill.customer==null?null:e.selectedBill.customer.mobile_number," ")}}function ue(a,n){if(a&1&&(t(0,"div",98)(1,"span",77),l(2,"Contact:"),i(),l(3),i()),a&2){let e=x(3);r(3),p(" ",e.selectedBill.customer==null?null:e.selectedBill.customer.contact_person," ")}}function xe(a,n){if(a&1&&(t(0,"div")(1,"span",77),l(2,"Address:"),i(),l(3),i()),a&2){let e=x(3);r(3),p(" ",e.selectedBill.customer==null?null:e.selectedBill.customer.address," ")}}function be(a,n){if(a&1&&(t(0,"tr")(1,"td",100),l(2),i(),t(3,"td"),l(4),b(5,"date"),i(),t(6,"td"),l(7),i(),t(8,"td"),l(9),i(),t(10,"td",101),l(11),i(),t(12,"td",45),l(13),i(),t(14,"td",45),l(15),b(16,"number"),i(),t(17,"td",35),l(18),b(19,"number"),i()()),a&2){let e=n.$implicit,s=n.index;r(2),I(s+1),r(2),I(e.item_date?g(5,8,e.item_date,"dd-MMM-yyyy"):"\u2014"),r(3),I(e.vehicle||"\u2014"),r(2),I(e.dc_no||"\u2014"),r(2),I(e.material||"\u2014"),r(2),I(e.qty),r(2),p("\u20B9",g(16,11,e.rate,"1.2-2"),""),r(3),p("\u20B9",g(19,14,e.amount,"1.2-2"),"")}}function ge(a,n){if(a&1&&(t(0,"div",102)(1,"span",103),w(2,"i",104),l(3," Notes / Terms"),i(),l(4),i()),a&2){let e=x(3);r(4),p(" ",e.selectedBill.notes," ")}}function fe(a,n){if(a&1&&(t(0,"div",92)(1,"span"),l(2,"CGST:"),i(),t(3,"span",77),l(4),b(5,"number"),i()()),a&2){let e=x(3);r(4),p("\u20B9",g(5,1,e.selectedBill.cgst,"1.2-2"),"")}}function he(a,n){if(a&1&&(t(0,"div",92)(1,"span"),l(2,"SGST:"),i(),t(3,"span",77),l(4),b(5,"number"),i()()),a&2){let e=x(3);r(4),p("\u20B9",g(5,1,e.selectedBill.sgst,"1.2-2"),"")}}function ve(a,n){if(a&1&&(t(0,"div",92)(1,"span"),l(2,"IGST:"),i(),t(3,"span",77),l(4),b(5,"number"),i()()),a&2){let e=x(3);r(4),p("\u20B9",g(5,1,e.selectedBill.igst,"1.2-2"),"")}}function _e(a,n){if(a&1&&(t(0,"div",67)(1,"div",68)(2,"div",69)(3,"div",70)(4,"span",71),l(5,"Billed To"),i(),t(6,"h4",72),l(7),i(),t(8,"div",73),S(9,ce,5,1,"div",74)(10,pe,4,1,"div",74)(11,ue,4,1,"div",74)(12,xe,4,1,"div",15),i()()(),t(13,"div",75)(14,"div",70)(15,"span",71),l(16,"Invoice Details"),i(),t(17,"div",76),l(18),i(),t(19,"div",73)(20,"span",77),l(21,"Date:"),i(),l(22),b(23,"date"),i()()()(),t(24,"div",78)(25,"table",79)(26,"thead",80)(27,"tr")(28,"th",81),l(29,"#"),i(),t(30,"th",82),l(31,"Date"),i(),t(32,"th"),l(33,"Vehicle No"),i(),t(34,"th",83),l(35,"DC No"),i(),t(36,"th"),l(37,"Material"),i(),t(38,"th",84),l(39,"Qty"),i(),t(40,"th",85),l(41,"Rate"),i(),t(42,"th",86),l(43,"Amount"),i()()(),t(44,"tbody"),S(45,be,20,17,"tr",32),i()()(),t(46,"div",87)(47,"div",88),S(48,ge,5,1,"div",89),i(),t(49,"div",90)(50,"div",91)(51,"div",92)(52,"span"),l(53,"Subtotal:"),i(),t(54,"span",77),l(55),b(56,"number"),i()(),S(57,fe,6,4,"div",93)(58,he,6,4,"div",93)(59,ve,6,4,"div",93),t(60,"div",94)(61,"span",95),l(62,"Tax Amount:"),i(),t(63,"span",77),l(64),b(65,"number"),i()(),t(66,"div",96)(67,"span",97),l(68,"Grand Total:"),i(),t(69,"span",97),l(70),b(71,"number"),i()()()()()()),a&2){let e=x(2);r(7),I(e.selectedBill.customer==null?null:e.selectedBill.customer.customer_name),r(2),u("ngIf",e.selectedBill.customer==null?null:e.selectedBill.customer.gst_number),r(),u("ngIf",e.selectedBill.customer==null?null:e.selectedBill.customer.mobile_number),r(),u("ngIf",e.selectedBill.customer==null?null:e.selectedBill.customer.contact_person),r(),u("ngIf",e.selectedBill.customer==null?null:e.selectedBill.customer.address),r(6),p("Invoice #",e.selectedBill.bill_no,""),r(4),p(" ",g(23,15,e.selectedBill.bill_date,"dd-MMM-yyyy")," "),r(23),u("ngForOf",e.selectedBill.items),r(3),u("ngIf",e.selectedBill.notes),r(7),p("\u20B9",g(56,18,e.selectedBill.subtotal,"1.2-2"),""),r(2),u("ngIf",e.selectedBill.cgst>0),r(),u("ngIf",e.selectedBill.sgst>0),r(),u("ngIf",e.selectedBill.igst>0),r(5),p("\u20B9",g(65,21,e.selectedBill.tax_amount,"1.2-2"),""),r(6),p("\u20B9",g(71,24,e.selectedBill.grand_total,"1.2-2"),"")}}function ye(a,n){if(a&1){let e=k();t(0,"div",51),C("click",function(){B(e);let o=x();return E(o.closeBillModal())}),t(1,"div",52),C("click",function(o){return B(e),E(o.stopPropagation())}),t(2,"div",53)(3,"h3"),w(4,"i",54),t(5,"span"),l(6),i()(),t(7,"div",55),S(8,de,4,0,"button",56),t(9,"button",57),C("click",function(){B(e);let o=x();return E(o.closeBillModal())}),w(10,"i",58),i()()(),S(11,me,6,0,"div",59)(12,_e,72,27,"div",60),i()()}if(a&2){let e=x();r(6),p("Bill Info - #",e.selectedBillNo,""),r(2),u("ngIf",e.selectedBill),r(3),u("ngIf",e.loadingBill),r(),u("ngIf",!e.loadingBill&&e.selectedBill)}}function Se(a,n){a&1&&(t(0,"div",63)(1,"div",64)(2,"span",65),l(3,"Loading..."),i()(),t(4,"p",66),l(5,"Fetching ledger details..."),i()())}function we(a,n){if(a&1&&(t(0,"tr")(1,"td"),l(2),b(3,"date"),i(),t(4,"td")(5,"span",116),l(6),i()(),t(7,"td",117),l(8),b(9,"number"),i(),t(10,"td",44),l(11),b(12,"number"),i(),t(13,"td",118),l(14),b(15,"number"),i()()),a&2){let e=n.$implicit;r(2),I(g(3,6,e.date,"dd-MMM-yyyy")),r(3),u("ngClass",e.type==="bill"?"text-primary":"text-success"),r(),p(" ",e.reference," "),r(2),p(" ",e.debit>0?"\u20B9"+g(9,9,e.debit,"1.2-2"):"\u2014"," "),r(3),p(" ",e.credit>0?"\u20B9"+g(12,12,e.credit,"1.2-2"):"\u2014"," "),r(3),p(" \u20B9",g(15,15,e.balance,"1.2-2")," ")}}function Ce(a,n){a&1&&(t(0,"tr")(1,"td",119),l(2," No ledger history found for this customer. "),i()())}function Be(a,n){if(a&1&&(t(0,"div",108)(1,"div",18)(2,"div",109)(3,"div",110)(4,"span",71),l(5,"Total Invoiced"),i(),t(6,"div",111),l(7),b(8,"number"),i()()(),t(9,"div",109)(10,"div",110)(11,"span",71),l(12,"Total Collected"),i(),t(13,"div",112),l(14),b(15,"number"),i()()(),t(16,"div",109)(17,"div",110)(18,"span",71),l(19,"Outstanding Balance"),i(),t(20,"div",113),l(21),b(22,"number"),i()()()(),t(23,"div",78)(24,"table",79)(25,"thead",80)(26,"tr")(27,"th",28),l(28,"Date"),i(),t(29,"th"),l(30,"Transaction / Reference"),i(),t(31,"th",114),l(32,"Debit (Invoice)"),i(),t(33,"th",114),l(34,"Credit (Paid)"),i(),t(35,"th",115),l(36,"Balance"),i()()(),t(37,"tbody"),S(38,we,16,18,"tr",32)(39,Ce,3,0,"tr",15),i()()()()),a&2){let e=x(2);r(7),p("\u20B9",g(8,6,e.customerLedgerSummary.totalInvoiced,"1.2-2"),""),r(7),p("\u20B9",g(15,9,e.customerLedgerSummary.totalCollected,"1.2-2"),""),r(6),u("ngClass",e.customerLedgerSummary.outstandingBalance>0?"text-danger":"text-success"),r(),p(" \u20B9",g(22,12,e.customerLedgerSummary.outstandingBalance,"1.2-2")," "),r(17),u("ngForOf",e.selectedCustomerLedger),r(),u("ngIf",e.selectedCustomerLedger.length===0)}}function Ee(a,n){if(a&1){let e=k();t(0,"div",51),C("click",function(){B(e);let o=x();return E(o.closeCustomerLedgerModal())}),t(1,"div",105),C("click",function(o){return B(e),E(o.stopPropagation())}),t(2,"div",53)(3,"h3"),w(4,"i",106),t(5,"span"),l(6),i()(),t(7,"div",55)(8,"button",61),C("click",function(){B(e);let o=x();return E(o.printCustomerLedger())}),w(9,"i",62),t(10,"span"),l(11,"Print Ledger"),i()(),t(12,"button",57),C("click",function(){B(e);let o=x();return E(o.closeCustomerLedgerModal())}),w(13,"i",58),i()()(),S(14,Se,6,0,"div",59)(15,Be,40,15,"div",107),i()()}if(a&2){let e=x();r(6),p("Ledger Statement - ",e.selectedCustomerName,""),r(8),u("ngIf",e.loadingLedger),r(),u("ngIf",!e.loadingLedger)}}var Z=class a{constructor(n,e,s,o,m){this.reportService=n;this.billService=e;this.customerService=s;this.paymentService=o;this.toast=m}reportService;billService;customerService;paymentService;toast;tracker=[];summary;selectedFilter="all";searchQuery="";showBillModal=!1;selectedBillNo=null;selectedBill=null;loadingBill=!1;showCustomerLedgerModal=!1;loadingLedger=!1;selectedCustomerName="";selectedCustomerLedger=[];customerLedgerSummary={totalInvoiced:0,totalCollected:0,outstandingBalance:0};allBills=[];allPayments=[];allCustomers=[];ngOnInit(){this.loadReport(),this.loadSummary(),this.loadAllData()}loadReport(){this.reportService.getTracker().subscribe(n=>{this.tracker=n})}loadSummary(){this.reportService.getDashboard().subscribe(n=>{this.summary=n})}get filteredTracker(){let n=this.tracker;if(this.searchQuery.trim()){let e=this.searchQuery.toLowerCase().trim();n=n.filter(s=>s.bill_no.toString().includes(e)||s.customer_name.toLowerCase().includes(e))}return n}setFilter(n){this.selectedFilter=n,this.searchQuery=""}get collectionRate(){return!this.summary||this.summary.total_revenue===0?0:(this.summary.total_revenue-this.summary.outstanding)/this.summary.total_revenue*100}deleteBill(n){confirm(`Are you sure you want to delete bill #${n}? This action cannot be undone.`)&&this.billService.deleteBill(n).subscribe({next:()=>{this.toast.success(`Bill #${n} deleted successfully.`),this.loadReport(),this.loadSummary()},error:e=>{this.toast.error(e.error?.detail||"Failed to delete bill.")}})}get customerSummaries(){let n=new Map;for(let o of this.tracker){let m=o.customer_name;n.has(m)||n.set(m,{total_bill:0,paid:o.paid_amount});let v=n.get(m);v.total_bill+=o.bill_amount}let e=[];n.forEach((o,m)=>{e.push({customer_name:m,total_bill_amount:o.total_bill,total_paid_amount:o.paid,balance_amount:o.total_bill-o.paid})});let s=e.sort((o,m)=>o.customer_name.localeCompare(m.customer_name));if(this.searchQuery.trim()){let o=this.searchQuery.toLowerCase().trim();s=s.filter(m=>m.customer_name.toLowerCase().includes(o))}return s}downloadReportCsv(){if(this.tracker.length===0){alert("No data to export.");return}let n="",e="";this.selectedFilter==="customer"?(n=`Customer Name,Total Bill Amount,Total Payments,Outstanding Balance
`,this.customerSummaries.forEach(v=>{n+=`"${v.customer_name.replace(/"/g,'""')}",${v.total_bill_amount},${v.total_paid_amount},${v.balance_amount}
`}),e=`Customer_Specific_Ledger_${new Date().toISOString().split("T")[0]}.csv`):(n=`Bill No,Customer Name,Bill Amount
`,this.filteredTracker.forEach(v=>{n+=`${v.bill_no},"${v.customer_name.replace(/"/g,'""')}",${v.bill_amount}
`}),e=`Ledger_Report_${this.selectedFilter}_${new Date().toISOString().split("T")[0]}.csv`);let s=new Blob([n],{type:"text/csv;charset=utf-8;"}),o=window.URL.createObjectURL(s),m=document.createElement("a");m.href=o,m.download=e,m.click(),window.URL.revokeObjectURL(o)}viewBillDetails(n){this.selectedBillNo=n,this.showBillModal=!0,this.loadingBill=!0,this.selectedBill=null,this.billService.getBill(n).subscribe({next:e=>{this.selectedBill=e,this.loadingBill=!1},error:e=>{this.toast.error(e.error?.detail||"Failed to fetch bill details."),this.loadingBill=!1,this.closeBillModal()}})}closeBillModal(){this.showBillModal=!1,this.selectedBillNo=null,this.selectedBill=null,this.loadingBill=!1}getSellerProfile(){let n={name:"SARAVANA ENTERPRISES",address:"No 68, Kodoor Panchayat, Vellodai Road, Krishnapuram, Ponneri, Tamil Nadu, 601204",gstin:"33BBMPS6356P1ZR",phone:"9884878988"};if(typeof window>"u"||typeof localStorage>"u")return n;let e=localStorage.getItem("seller_profile");return e?JSON.parse(e):n}printBill(){if(!this.selectedBill){this.toast.warning("No bill loaded to print.");return}let n=this.selectedBill,e=n.customer?n.customer.customer_name:"Unknown Customer",s=n.customer&&n.customer.address||"&mdash;",o=n.customer&&n.customer.gst_number||"&mdash;",m=this.getSellerProfile(),v=n.items||[],f=h=>Number(h||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),_=h=>"\u20B9 "+f(h),c=window.open("","_blank");if(!c){this.toast.error("Popup blocker is active. Please allow popups to download PDF.");return}c.document.write(`
      <html>
      <head>
        <title>${n.bill_no}</title>
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
              ${m.address.replace(/\\n/g,"<br>")}<br><br>
              <strong>GSTIN:</strong> ${m.gstin}<br>
              <strong>Cell:</strong> ${m.phone}
            </div>
          </div>
          <div class="title-section" style="width: 45%;">
            <h1>Bill Statement</h1>
            <table class="meta-table" align="right">
              <tr>
                <td class="meta-label">Bill No #:</td>
                <td>${n.bill_no}</td>
              </tr>
              <tr>
                <td class="meta-label">Date:</td>
                <td>${n.bill_date}</td>
              </tr>
              <tr>
                <td class="meta-label">Bill to:</td>
                <td>${e}</td>
              </tr>
              <tr>
                <td class="meta-label">Address:</td>
                <td>${s.replace(/\\n/g,"<br>")}</td>
              </tr>
              <tr>
                <td class="meta-label">Recipient's GST:</td>
                <td>${o}</td>
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
            ${v.map((h,d)=>`
              <tr>
                <td class="text-center">${d+1}</td>
                <td>${h.item_date||""}</td>
                <td>${h.vehicle||""}</td>
                <td>${h.material||""}</td>
                <td>${h.dc_no||""}</td>
                <td class="text-right">${h.qty||0}</td>
                <td class="text-right">${f(h.rate)}</td>
                <td class="text-right">${_(h.amount)}</td>
              </tr>
            `).join("")}
            
            <!-- Generate blank rows to fill visual grid up to 12 rows exactly like spreadsheet -->
            ${Array(Math.max(0,12-v.length)).fill(0).map((h,d)=>`
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
            <div style="white-space: pre-line; margin-bottom: 12px;">${n.notes||"Please remit payment as per invoice details."}</div>
            <div style="border-top: 1px dashed #000; padding-top: 10px; margin-top: 10px;">
              <strong>Amount in Words:</strong>
              <div style="text-transform: capitalize; font-style: italic; font-weight: bold; color: #000; margin-top: 4px; font-size: 13px;">
                ${this.getAmountInWords(n.grand_total||0)}
              </div>
            </div>
          </div>
          <table class="totals-table">
            <tr>
              <td>Sub Total</td>
              <td class="text-right">${f(n.subtotal)}</td>
            </tr>
            ${n.cgst>0?`
              <tr>
                <td>CGST</td>
                <td class="text-right">${f(n.cgst)}</td>
              </tr>
            `:""}
            ${n.sgst>0?`
              <tr>
                <td>SGST</td>
                <td class="text-right">${f(n.sgst)}</td>
              </tr>
            `:""}
            ${n.igst>0?`
              <tr>
                <td>IGST</td>
                <td class="text-right">${f(n.igst)}</td>
              </tr>
            `:""}
            <tr class="grand-total">
              <td>Grand Total</td>
              <td class="text-right">${_(n.grand_total)}</td>
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
                  filename:     '${n.bill_no}.pdf',
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
    `),c.document.close()}loadAllData(){this.billService.getBills().subscribe({next:n=>this.allBills=n,error:n=>console.error("Error loading bills:",n)}),this.paymentService.getPayments().subscribe({next:n=>this.allPayments=n,error:n=>console.error("Error loading payments:",n)}),this.customerService.getCustomers().subscribe({next:n=>this.allCustomers=n,error:n=>console.error("Error loading customers:",n)})}viewCustomerLedger(n){this.selectedCustomerName=n,this.showCustomerLedgerModal=!0,this.selectedCustomerLedger=[],this.customerLedgerSummary={totalInvoiced:0,totalCollected:0,outstandingBalance:0},this.loadingLedger=!0,$({customers:this.customerService.getCustomers(),bills:this.billService.getBills(),payments:this.paymentService.getPayments()}).subscribe({next:e=>{this.allCustomers=e.customers,this.allBills=e.bills,this.allPayments=e.payments;let s=this.allCustomers.find(d=>d.customer_name===n),o=s?s.id:null,m=this.allBills.filter(d=>d.customer_id===o||d.customer?.customer_name===n),v=this.allPayments.filter(d=>d.customer_id===o),f=[],_=0,c=0;m.forEach(d=>{let y=Number(d.grand_total||0);_+=y,f.push({date:d.bill_date,type:"bill",reference:`Bill #${d.bill_no}`,debit:y,credit:0,balance:0})}),v.forEach(d=>{let y=Number(d.amount_received||0);c+=y,f.push({date:d.payment_date,type:"payment",reference:d.remarks?`Payment Received (${d.remarks})`:"Payment Received",debit:0,credit:y,balance:0})}),f.sort((d,y)=>{let R=new Date(d.date).getTime()-new Date(y.date).getTime();if(R!==0)return R;if(d.type==="bill"&&y.type==="payment")return-1;if(d.type==="payment"&&y.type==="bill")return 1;if(d.type==="bill"&&y.type==="bill"){let X=Number(d.reference.replace("Bill #","")),Y=Number(y.reference.replace("Bill #",""));return X-Y}return 0});let h=0;f.forEach(d=>{h+=d.debit-d.credit,d.balance=h}),this.selectedCustomerLedger=f,this.customerLedgerSummary={totalInvoiced:_,totalCollected:c,outstandingBalance:_-c},this.loadingLedger=!1},error:e=>{this.toast.error("Failed to load customer ledger."),this.loadingLedger=!1,this.closeCustomerLedgerModal()}})}closeCustomerLedgerModal(){this.showCustomerLedgerModal=!1,this.selectedCustomerName="",this.selectedCustomerLedger=[],this.customerLedgerSummary={totalInvoiced:0,totalCollected:0,outstandingBalance:0}}printCustomerLedger(){if(!this.selectedCustomerName){this.toast.warning("No customer selected to print ledger.");return}let n=this.getSellerProfile(),e=this.selectedCustomerName,s=this.allCustomers.find(d=>d.customer_name===e),o=s&&s.address||"&mdash;",m=s&&s.gst_number||"&mdash;",v=this.selectedCustomerLedger||[],f=this.customerLedgerSummary,_=d=>Number(d||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),c=d=>"\u20B9 "+_(d),h=window.open("","_blank");if(!h){this.toast.error("Popup blocker is active. Please allow popups to print ledger.");return}h.document.write(`
      <html>
      <head>
        <title>${e}</title>
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
            margin-bottom: 25px;
            border-bottom: 1.5px solid #000;
            padding-bottom: 15px;
          }
          .title-section {
            text-align: right;
          }
          .title-section h1 {
            font-size: 26px;
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
          .summary-cards-container {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 25px;
          }
          .summary-card {
            flex: 1;
            border: 1px solid #000;
            border-radius: 4px;
            padding: 10px;
            text-align: center;
          }
          .summary-card-title {
            font-size: 11px;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .summary-card-value {
            font-size: 16px;
            font-weight: bold;
          }
          .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 15px;
          }
          .items-table th, .items-table td {
            border: 1px solid #000;
            padding: 6px 8px;
            font-size: 11px;
          }
          .items-table th {
            font-weight: bold;
            background-color: #f2f2f2;
            text-align: left;
          }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .statement-footer {
            margin-top: 30px;
            text-align: right;
            font-size: 11px;
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <div class="invoice-header">
          <div style="width: 55%;">
            <div class="seller-title">${n.name}</div>
            <div class="seller-text">
              ${n.address.replace(/\\n/g,"<br>")}<br><br>
              <strong>GSTIN:</strong> ${n.gstin}<br>
              <strong>Cell:</strong> ${n.phone}
            </div>
          </div>
          <div class="title-section" style="width: 45%;">
            <h1>Ledger Statement</h1>
            <table class="meta-table" align="right">
              <tr>
                <td class="meta-label">Customer:</td>
                <td>${e}</td>
              </tr>
              <tr>
                <td class="meta-label">Address:</td>
                <td>${o.replace(/\\n/g,"<br>")}</td>
              </tr>
              <tr>
                <td class="meta-label">GSTIN:</td>
                <td>${m}</td>
              </tr>
              <tr>
                <td class="meta-label">Statement Date:</td>
                <td>${new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</td>
              </tr>
            </table>
          </div>
        </div>

        <!-- Summary Cards -->
        <div class="summary-cards-container">
          <div class="summary-card">
            <div class="summary-card-title">Total Invoiced</div>
            <div class="summary-card-value">${c(f.totalInvoiced)}</div>
          </div>
          <div class="summary-card">
            <div class="summary-card-title">Total Collected</div>
            <div class="summary-card-value" style="color: green;">${c(f.totalCollected)}</div>
          </div>
          <div class="summary-card" style="border-width: 1.5px;">
            <div class="summary-card-title">Outstanding Balance</div>
            <div class="summary-card-value" style="color: ${f.outstandingBalance>0?"red":"green"};">
              ${c(f.outstandingBalance)}
            </div>
          </div>
        </div>

        <!-- Ledger Table -->
        <table class="items-table">
          <thead>
            <tr>
              <th width="40" class="text-center">S.No</th>
              <th width="100">Date</th>
              <th>Transaction Reference</th>
              <th width="130" class="text-right">Debit (Invoice)</th>
              <th width="130" class="text-right">Credit (Paid)</th>
              <th width="140" class="text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            ${v.map((d,y)=>`
               <tr>
                 <td class="text-center">${y+1}</td>
                 <td>${new Date(d.date).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</td>
                 <td style="font-weight: bold;">${d.reference}</td>
                 <td class="text-right" style="color: ${d.debit>0?"#b91c1c":"#000"};">
                   ${d.debit>0?c(d.debit):"\u2014"}
                 </td>
                 <td class="text-right" style="color: ${d.credit>0?"#15803d":"#000"};">
                   ${d.credit>0?c(d.credit):"\u2014"}
                 </td>
                 <td class="text-right" style="font-weight: bold;">${c(d.balance)}</td>
               </tr>
             `).join("")}
            
            <!-- Generate blank rows if ledger has few transactions -->
            ${Array(Math.max(0,10-v.length)).fill(0).map((d,y)=>`
              <tr>
                <td class="text-center">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div class="statement-footer">
          <p>Report generated dynamically by Billing Management System.</p>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"><\/script>
        <script>
          window.onload = function() {
            setTimeout(function() {
              if (typeof html2pdf !== 'undefined') {
                var element = document.body;
                var opt = {
                  margin:       0,
                  filename:     '${e}.pdf',
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
    `),h.document.close()}getAmountInWords(n){let e=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],s=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];if(n===0)return"Zero Rupees Only";let o=n.toFixed(2).split("."),m=parseInt(o[0],10),v=parseInt(o[1],10),f=c=>c<20?e[c]:c<100?s[Math.floor(c/10)]+(c%10!==0?" "+e[c%10]:""):e[Math.floor(c/100)]+" Hundred"+(c%100!==0?" and "+f(c%100):""),_="";if(m>0){let c=m,h=Math.floor(c/1e7);c%=1e7,h>0&&(_+=(h<100,f(h)+" Crore "));let d=Math.floor(c/1e5);c%=1e5,d>0&&(_+=f(d)+" Lakh ");let y=Math.floor(c/1e3);c%=1e3,y>0&&(_+=f(y)+" Thousand "),c>0&&(_+=f(c)+" "),_=_.trim()+" Rupees"}if(v>0){let c=f(v);_?_+=" and "+c+" Paise":_=c+" Paise"}return _?_.trim()+" Only":""}static \u0275fac=function(e){return new(e||a)(T(U),T(H),T(J),T(K),T(z))};static \u0275cmp=L({type:a,selectors:[["app-reports"]],decls:30,vars:11,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-4","flex-wrap","gap-3"],[1,"page-title","mb-1"],[1,"text-secondary","mb-0"],[1,"btn","btn-outline-primary",3,"click"],[1,"bi","bi-file-earmark-arrow-down"],["class","row g-4 mb-4",4,"ngIf"],[1,"card-custom","p-4"],[1,"d-flex","align-items-center","gap-3","flex-wrap"],["role","group",1,"btn-group","border","rounded-3","overflow-hidden"],["type","button",1,"btn","py-2","px-3","shadow-none","border-0","rounded-0",3,"click","ngClass"],[1,"input-group",2,"width","300px","max-width","100%"],[1,"input-group-text","bg-light","border-end-0","text-secondary","py-2"],[1,"bi","bi-search"],["type","text",1,"form-control","border-start-0","bg-light","ps-0","shadow-none","py-2",3,"ngModelChange","placeholder","ngModel"],[1,"text-secondary","small","font-semibold"],[4,"ngIf"],["class","table-responsive",4,"ngIf"],["class","modal-backdrop",3,"click",4,"ngIf"],[1,"row","g-4","mb-4"],[1,"col-sm-6","col-md-3"],[1,"card-custom","p-3","bg-light","border-0"],[1,"text-secondary","uppercase","fs-6","fw-bold","tracking-wider","mb-1"],[1,"fs-3","fw-bold","text-dark"],[1,"fs-3","fw-bold","text-success"],[1,"fs-3","fw-bold","text-danger"],[1,"fs-3","fw-bold","text-primary"],[1,"table-responsive"],[1,"table","table-hover","align-middle"],["width","120"],["width","180",1,"text-end"],["width","150",1,"text-center"],["width","100",1,"text-center"],[4,"ngFor","ngForOf"],[1,"font-monospace","fw-bold","text-secondary"],[1,"fw-bold","text-dark"],[1,"text-end","fw-semibold","text-dark"],[1,"text-center"],["title","View Bill Details",1,"btn","btn-sm","btn-outline-primary","px-3",3,"click"],[1,"bi","bi-eye","me-1"],["title","Delete Invoice",1,"btn","btn-sm","btn-link","text-danger","p-0","shadow-none","border-0",3,"click"],[1,"bi","bi-trash","fs-5"],["colspan","5",1,"text-center","py-5","text-muted"],[1,"bi","bi-file-earmark-bar-graph","display-4","mb-3","d-block","opacity-50"],["width","160",1,"text-center"],[1,"text-end","text-success","fw-semibold"],[1,"text-end"],[1,"badge-custom",3,"ngClass"],["title","View Customer Ledger",1,"btn","btn-sm","btn-outline-primary","px-3",3,"click"],[1,"bi","bi-journal-text","me-1"],["colspan","4",1,"text-center","py-5","text-muted"],[1,"bi","bi-people","display-4","mb-3","d-block","opacity-50"],[1,"modal-backdrop",3,"click"],[1,"modal-container",2,"width","850px","max-width","95%","max-height","90vh","overflow-y","auto",3,"click"],[1,"modal-header-custom"],[1,"bi","bi-file-earmark-text","text-primary","me-2"],[1,"d-flex","align-items-center","gap-2"],["class","btn btn-sm btn-outline-primary d-flex align-items-center gap-1 px-3",3,"click",4,"ngIf"],[1,"btn-close-custom",3,"click"],[1,"bi","bi-x-lg"],["class","text-center py-5",4,"ngIf"],["class","bill-details-content",4,"ngIf"],[1,"btn","btn-sm","btn-outline-primary","d-flex","align-items-center","gap-1","px-3",3,"click"],[1,"bi","bi-printer"],[1,"text-center","py-5"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],[1,"text-secondary","mt-2","mb-0"],[1,"bill-details-content"],[1,"row","mb-4"],[1,"col-md-6"],[1,"mb-3"],[1,"text-muted","small","uppercase","tracking-wider","d-block","mb-1"],[1,"text-primary","fw-bold","mb-1"],[1,"text-secondary","small"],["class","mb-1",4,"ngIf"],[1,"col-md-6","text-md-end"],[1,"fs-5","fw-bold","text-dark","mb-1"],[1,"fw-semibold","text-dark"],[1,"table-responsive","border","rounded-3","mb-4","overflow-hidden"],[1,"table","table-hover","align-middle","mb-0",2,"font-size","13px"],[1,"table-light"],["width","50",1,"text-center"],["width","105"],["width","100"],["width","80",1,"text-end"],["width","100",1,"text-end"],["width","120",1,"text-end"],[1,"row","justify-content-between","mb-2"],[1,"col-md-6","mb-3","mb-md-0"],["class","p-3 bg-light rounded-3 text-secondary small h-100",4,"ngIf"],[1,"col-md-5"],[1,"d-flex","flex-column","gap-2","text-secondary","small"],[1,"d-flex","justify-content-between"],["class","d-flex justify-content-between",4,"ngIf"],[1,"d-flex","justify-content-between","border-top","pt-2"],[1,"text-dark","fw-bold"],[1,"d-flex","justify-content-between","border-top","border-2","pt-2","pb-2"],[1,"text-primary","fw-bold","fs-5"],[1,"mb-1"],[1,"font-monospace","text-primary","fw-semibold"],[1,"text-center","text-secondary","font-monospace"],[1,"fw-semibold"],[1,"p-3","bg-light","rounded-3","text-secondary","small","h-100"],[1,"fw-semibold","text-dark","d-block","mb-1"],[1,"bi","bi-info-circle","me-1","text-primary"],[1,"modal-container",2,"width","900px","max-width","95%","max-height","90vh","overflow-y","auto",3,"click"],[1,"bi","bi-journal-text","text-primary","me-2"],["class","customer-ledger-content",4,"ngIf"],[1,"customer-ledger-content"],[1,"col-md-4"],[1,"card-custom","p-3","bg-light","border-0","text-center"],[1,"fs-4","fw-bold","text-dark"],[1,"fs-4","fw-bold","text-success"],[1,"fs-4","fw-bold",3,"ngClass"],["width","140",1,"text-end"],["width","150",1,"text-end"],[1,"fw-semibold",3,"ngClass"],[1,"text-end","text-danger","fw-semibold"],[1,"text-end","fw-bold","text-dark"],["colspan","5",1,"text-center","py-4","text-muted"]],template:function(e,s){e&1&&(t(0,"div",0)(1,"div")(2,"h1",1),l(3,"Ledger & Reports"),i(),t(4,"p",2),l(5,"Track customer invoices, payment statuses, and outstanding collection balances"),i()(),t(6,"button",3),C("click",function(){return s.downloadReportCsv()}),w(7,"i",4),t(8,"span"),l(9,"Export Report to CSV"),i()()(),S(10,ee,29,16,"div",5),t(11,"div",6)(12,"div",0)(13,"div",7)(14,"div",8)(15,"button",9),C("click",function(){return s.setFilter("all")}),l(16," All Invoices "),i(),t(17,"button",9),C("click",function(){return s.setFilter("customer")}),l(18," Customer Specific "),i()(),t(19,"div",10)(20,"span",11),w(21,"i",12),i(),t(22,"input",13),P("ngModelChange",function(m){return M(s.searchQuery,m)||(s.searchQuery=m),m}),i()()(),t(23,"div",14),S(24,te,2,1,"span",15)(25,ie,2,1,"span",15),i()(),S(26,re,17,2,"div",16)(27,se,17,2,"div",16),i(),S(28,ye,13,4,"div",17)(29,Ee,16,3,"div",17)),e&2&&(r(10),u("ngIf",s.summary),r(5),u("ngClass",s.selectedFilter==="all"?"btn-primary":"btn-light text-secondary"),r(2),u("ngClass",s.selectedFilter==="customer"?"btn-primary":"btn-light text-secondary"),r(5),u("placeholder",s.selectedFilter==="customer"?"Search customer...":"Search bill no or customer..."),N("ngModel",s.searchQuery),r(2),u("ngIf",s.selectedFilter!=="customer"),r(),u("ngIf",s.selectedFilter==="customer"),r(),u("ngIf",s.selectedFilter!=="customer"),r(),u("ngIf",s.selectedFilter==="customer"),r(),u("ngIf",s.showBillModal),r(),u("ngIf",s.showCustomerLedgerModal))},dependencies:[O,D,F,j,A,V,q,G,Q,W],encapsulation:2})};export{Z as ReportsComponent};
