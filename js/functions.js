var dfd, content, table, npvVal, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;


$.ajax({url : "js/data.json", dataType : "json"})
.done(function(data){
    content = data.content;
    table = data.tbl;
    npvVal = data.npvval;
    dfd_ajax.resolve();
});


// deferred object
dfd_ready = $.Deferred();
dfd_ajax = $.Deferred();


//checks to see when both the ajax call and the dfd has been resolved (it is in ready())
//calls injectContent() when both ajax call and .ready() are running/ have been completed
$.when(dfd_ajax, dfd_ready).then(function(){
    injectContent();            
});


//deferred object is resolved here as a check to make sure the document is ready
$(document).ready(function(){
    dfd_ready.resolve();
});


// Changes the value at bottom of infographic on select change
$("select").change(function(){
    $("#output").text(table[$("#sales").val()][$("#capability").val()][$("#branches").val()]);
    $("#npv-value").text(npvVal[$("#sales").val()][$("#capability").val()][$("#branches").val()]);
});


// Injects the json content into the infographic
function injectContent(){
    s1 = $("#s1 .info-block-content");
    s2 = $("#s2 .info-block-content");
    s3 = $("#s3 .info-block-content");
    s4 = $("#s4 .info-block-content");
    s5 = $("#s5 .info-block-content");
    s6 = $("#s6 .info-block-content");
    s7 = $("#s7 .info-block-content");
    s8 = $("#s8 .info-block-content");
    s9 = $("#s9 .info-block-content");
    s10 = $("#s10 .info-block-content");
    s11 = $("#s11 .info-block-content");

    s1.find("h2").text(content.s1.head);
    
    s2.find("h3").text(content.s2.head);
    s2.find("label[for='branches']").text(content.s2.select1.label);
    s2.find("label[for='sales']").text(content.s2.select2.label);
    s2.find("label[for='capability']").text(content.s2.select3.label);
    s3.find("h3").text(content.s3.head);

    s4.find("> p").text(content.s4.head);
    s4.find(".block-1 span").text(content.s4.block1[0]);
    s4.find(".block-1 p").text(content.s4.block1[1]);
    s4.find(".block-2 span").text(content.s4.block2[0]);
    s4.find(".block-2 p").text(content.s4.block2[1]);
    s4.find(".block-3 span").text(content.s4.block3[0]);
    s4.find(".block-3 p").text(content.s4.block3[1]);
    s4.find(".block-4 span").text(content.s4.block4[0]);
    s4.find(".block-4 p").text(content.s4.block4[1]);

    s5.find(".disclaimer").text(content.s5.disclaimer);
    s5.find("h3").text(content.s5.head);

    s6.find(".block-1 p span").first().text(content.s6.block1[0]);
    s6.find(".block-1 p span").last().text(content.s6.block1[1]);
    s6.find(".block-1 .disclaimer").text(content.s6.disclaimer);
    s6.find(".row1 .lbl").text(content.s6.chart.row1[0]);
    s6.find(".row1 .val").text(content.s6.chart.row1[1]);
    s6.find(".row2 .lbl").text(content.s6.chart.row2[0]);
    s6.find(".row2 .val").text(content.s6.chart.row2[1]);
    s6.find(".row3 .lbl").text(content.s6.chart.row3[0]);
    s6.find(".row3 .val").text(content.s6.chart.row3[1]);
    s6.find(".row4 .lbl").text(content.s6.chart.row4[0]);
    s6.find(".row4 .val").text(content.s6.chart.row4[1]);
    s6.find(".row5 .lbl").text(content.s6.chart.row5[0]);
    s6.find(".row5 .val").text(content.s6.chart.row5[1]);
    s6.find(".title h5").text(content.s6.chart.head);
    s6.find(".span330 p").text(content.s6.block2);

    s7.find("h3").text(content.s7.head);
    
    s8.find(".block-1 .intro").text(content.s8.block1.intro);
    s8.find(".block-1 .house span").first().text(content.s8.block1.house[0]);
    s8.find(".block-1 .house span").last().text(content.s8.block1.house[1]);
    s8.find(".block-1 .key span").first().text(content.s8.block1.key[0]);
    s8.find(".block-1 .key span").last().text(content.s8.block1.key[1]);
    s8.find(".span463 p").text(content.s8.head);
    s8.find(".row1 .lbl").text(content.s8.chart.row1[0]);
    s8.find(".row1 .val").text(content.s8.chart.row1[1]);
    s8.find(".row2 .lbl").text(content.s8.chart.row2[0]);
    s8.find(".row2 .val").text(content.s8.chart.row2[1]);
    s8.find(".title h5").text(content.s8.chart.title);

    s9.find("h2").text(content.s9.head);
    
    s10.find("#output").text(table[1][3][3]);
    s10.find(".span400 p").text(content.s10.content);
    s10.find("> p").html(content.s10.link);
    
    s11.find(".disclaimer").eq(0).text(content.s11.disclaimer1);
    s11.find(".npv-text").text(content.s11.disclaimer2);
    s11.find("#npv-value").text(npvVal[1][3][3]);
    s11.find(".link-1").eq(0).html(content.s11.link1);
}
