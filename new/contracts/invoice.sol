pragma solidity >=0.5.0;

contract Invoice{

struct InvoiceInfo {
    // string invoiceID;
    string companyName;
    string invoiceDate;
    string invoiceAmt;
    uint256 id;
    string buyer;
    uint256 mobile_no;
    bool valid;
    bool discounted ;
}

mapping(uint256 => InvoiceInfo) public invoices;
uint256[] public invoiceIds;

    function registerInvoice( string memory companyName, string memory invoiceDate, 
                             string memory invoiceAmt, string memory buyer, uint256 id, uint256 mobile_no) public {
        InvoiceInfo storage newInvoice = invoices[id];
        // newInvoice.invoiceID = invoiceID;
        newInvoice.companyName = companyName;
        newInvoice.invoiceDate = invoiceDate;
        newInvoice.invoiceAmt = invoiceAmt;
        newInvoice.buyer = buyer;
        newInvoice.id = id;
        newInvoice.mobile_no = mobile_no;
        newInvoice.valid = false;
        newInvoice.discounted = false;
        invoiceIds.push(id);
    }
    
    function validateInvoice(uint256 id) public{
        invoices[id].valid = true;
    }
    
    function discountInvoice(uint256 id) public{
        invoices[id].discounted = true;
    }
    
    function getInvoice(uint256 id) public view returns ( string memory, string memory, 
                                                    string memory, string memory, uint256){
        InvoiceInfo storage s = invoices[id];
        return (s.companyName,s.invoiceDate,s.invoiceAmt,s.buyer,s.mobile_no);
    }
    
    function getUnverifiedList() public view returns (uint[] memory){
        uint count=0;
        for(uint256 i=0; i<invoiceIds.length;i++){
            InvoiceInfo storage s = invoices[invoiceIds[i]];
            if (s.valid == false){
               count+=1;
            }
        }
        uint[] memory invoiceList=new uint[](count);
        uint c=0;
        for(uint256 i=0; i<invoiceIds.length;i++){
            InvoiceInfo storage s = invoices[invoiceIds[i]];
            if (s.valid == false){
               invoiceList[c]=invoiceIds[i];
               c+=1;
            }
        }
        return invoiceList;
        
    }
    
    function getUndiscountedList() public view returns (uint[] memory){
        uint count=0;
        for(uint256 i=0; i<invoiceIds.length;i++){
            InvoiceInfo storage s = invoices[invoiceIds[i]];
            if (s.discounted == false){
               count+=1;
            }
        }
        uint[] memory invoiceList=new uint[](count);
        uint c=0;
        for(uint256 i=0; i<invoiceIds.length;i++){
            InvoiceInfo storage s = invoices[invoiceIds[i]];
            if (s.discounted == false){
               invoiceList[c]=invoiceIds[i];
               c+=1;
            }
        }
        return invoiceList;
        
    }
}