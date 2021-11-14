pragma solidity >=0.5.0;

contract Invoice{

struct InvoiceInfo {
    string invoiceID;
    string companyName;
    string invoiceDate;
    string invoiceAmt;
    string buyer;
    uint256 mobile_no;
    bool valid;
    bool discounted;
}

mapping(uint256 => InvoiceInfo) invoices;
uint256[] public invoiceIds;

    function registerInvoice(string memory invoiceID, string memory companyName, string memory invoiceDate, 
                             string memory invoiceAmt, string memory buyer, uint256 id, uint256 mobile_no) public {
        InvoiceInfo storage newInvoice = invoices[id];
        newInvoice.invoiceID = invoiceID;
        newInvoice.companyName = companyName;
        newInvoice.invoiceDate = invoiceDate;
        newInvoice.invoiceAmt = invoiceAmt;
        newInvoice.buyer = buyer;
        newInvoice.mobile_no = mobile_no;
        newInvoice.push(id);
    }
    
    function getInvoice(uint256 id) public view returns (string memory, string memory, string memory, 
                                                    string memory, string memory, uint256){
        InvoiceInfo storage s = invoices[id];
        return (s.invoiceID,s.companyName,s.invoiceDate,s.invoiceAmt,s.buyer,s.mobile_no);
    }
}