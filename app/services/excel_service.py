from io import BytesIO

from openpyxl import Workbook

from app.models.bill import Bill


class ExcelService:

    @staticmethod
    def generate_bill_excel(
        bill: Bill
    ):

        workbook = Workbook()

        worksheet = workbook.active

        worksheet.title = "Bill"

        worksheet["A1"] = "Bill Number"
        worksheet["B1"] = bill.bill_no

        worksheet["A2"] = "Bill Date"
        worksheet["B2"] = str(
            bill.bill_date
        )

        worksheet["A3"] = "Customer"

        worksheet["B3"] = (
            bill.customer.customer_name
        )

        worksheet.append([])

        worksheet.append(
            [
                "Date",
                "Vehicle",
                "Material",
                "DC No",
                "Qty",
                "Rate",
                "Amount"
            ]
        )

        for item in bill.items:

            worksheet.append(
                [
                    str(item.item_date),
                    item.vehicle,
                    item.material,
                    item.dc_no,
                    float(item.qty),
                    float(item.rate),
                    float(item.amount)
                ]
            )

        worksheet.append([])

        worksheet.append(
            [
                "",
                "",
                "",
                "",
                "",
                "Subtotal",
                float(bill.subtotal)
            ]
        )

        worksheet.append(
            [
                "",
                "",
                "",
                "",
                "",
                "Tax",
                float(
                    bill.tax_amount
                )
            ]
        )

        worksheet.append(
            [
                "",
                "",
                "",
                "",
                "",
                "Grand Total",
                float(
                    bill.grand_total
                )
            ]
        )

        output = BytesIO()

        workbook.save(output)

        output.seek(0)

        return output