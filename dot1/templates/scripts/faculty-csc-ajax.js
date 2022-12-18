/*start of docment.ready function*/
$(document).ready(function(){

/* Campus */
/*Campus*/















    /*Campus Change*/
$("#id_cscd_campus").change(function(){
    var id_campus = $("#id_cscd_campus").val();
    var id_school = $("#id_cscd_school").val();
    var id_centre = $("#id_cscd_centre").val();
    if(id_campus == '')
    {
    }
    else
    {
	$.ajax
	({
	    type: "GET",
	    url: "/school_list_faculty/",
	    data: {"id_campus":id_campus},
	    success: function (data)
	    {
//		alert(data);
		var obj1 = JSON.parse(data);
		var schoolList= obj1.schoolList;
		
		schoolTableData = "<option value=''>All School</option>"
		//alert(coursenamelist.length)
		for(i=0;i<schoolList.length;i++)
		{
		    var school_id=schoolList[i].school_id;	
		    var school_name=schoolList[i].school_name;
		    
		    schoolTableData+="<option value="+school_id+" name='school'>"+school_name+"</option>";
		    
		    divelement=document.getElementById("id_cscd_school")
		    divelement.innerHTML=schoolTableData
		}

	    }
	});

    }
});



/*School Change*/
$("#id_cscd_school").change(function(){
    var id_campus = $("#id_cscd_campus").val();
    var id_school = $("#id_cscd_school").val();
    var id_centre = $("#id_cscd_centre").val();
//    var id_department = $("#id_empr_department").val();
    if(id_school == '')
    {


    }
    else
    {
	
	$.ajax
	({
	    type: "GET",
	    url: "/centre_list_faculty/",
	    data: {"id_campus":id_campus, "id_school":id_school},
	    success: function (data)
	    {
//		alert(data)
		var obj1 = JSON.parse(data);
		var centreList= obj1.centreList;
		
		centreTableData = "<option value=''>All Centres</option>"
		//alert(coursenamelist.length)
		for(i=0;i<centreList.length;i++)
		{
		    var centre_id=centreList[i].centre_id;	
		    var centre_name=centreList[i].centre_name;
		    
		    centreTableData+="<option value="+centre_id+" name='centre'>"+centre_name+"</option>";
		    
		    divelement=document.getElementById("id_cscd_centre")
		    divelement.innerHTML=centreTableData
		}

	    }
	});
    }
});






























// /*Batch Change*/

// /*Semester*/
// var id_programme = $("#id_programme").val();
// var id_sem = $("#id_sem").val();
// var id_batch = $("#id_batch").val();
// var campusid=$("#campusid").val();
// //alert(campusid)
// if(id_batch!='')
// {
// 	if(id_sem == '')
// 	{
// 	$("#id_sem").removeAttr('disabled');
// 	sem_err=document.getElementById("sem_err");
// 	sem_err.innerHTML="Please Select A Semester";


// 	$("#id_course").val('');
// 	$("#id_course").attr('disabled','disabled');
// 	course_err=document.getElementById("course_err");
// 	course_err.innerHTML="";

// 	$("#generatereportbtn").attr('disabled','disabled');
// 	$('#generatereportbtn').removeClass("btnstyle").addClass("btndisabled");
// 	$("#btnPrintSummary").attr('disabled','disabled');
// 	$('#btnPrintSummary').removeClass("btnstyle").addClass("btndisabled");
// 	$("#report_details").hide();
// 	pname=document.getElementById("pname");
// 	pname.innerHTML="Programme Name :";
// 	}
// 	else
// 	{	
// 	var id_sem = $("#id_sem").val();
// 	sem_err=document.getElementById("sem_err");
// 	sem_err.innerHTML="";				
				
// 	$("#id_course").removeAttr('disabled');
// 	$.ajax
//  	({
// 		type: "POST",
// 		url: "/course_list/",
// 		data: {"id_programme":id_programme,"id_batch":id_batch,"id_sem":id_sem,"campusid":campusid},
// 		success: function (data)
// 		{
// 			//alert(data)
// 			var obj1 = JSON.parse(data);
// 			var coursenamelist= obj1.coursenamelist;
			
// 			courseTableData = "<option value=''>Select</option>"
// 			//alert(coursenamelist.length)
// 			if(coursenamelist.length!=0)
// 			{
// 				for(i=0;i<coursenamelist.length;i++)
// 			    	{
// 					var course_id=coursenamelist[i].course_id;	
// 					var course_name=coursenamelist[i].course_name;
// 					var course_code=coursenamelist[i].course_code;
// 					courseTableData+="<option value="+course_id+" name='course'>"+course_code+': '+course_name+"</option>";
	
// 					divelement=document.getElementById("id_course")
// 					divelement.innerHTML=courseTableData
// 				}
// 				course_err=document.getElementById("course_err");
// 				course_err.innerHTML="Please Select A Course Name";
// 			}
// 			else
// 			{
// 				courseTableData = "<option value=''>Select</option>"
// 				divelement=document.getElementById("id_course")
// 				divelement.innerHTML=courseTableData
// 				course_err=document.getElementById("course_err");
// 				course_err.innerHTML="There are no Courses To Display For Semester "+id_sem;
// 			}
// 		}
// 	});
	
// 	$("#generatereportbtn").attr('disabled','disabled');
// 	$('#generatereportbtn').removeClass("btnstyle").addClass("btndisabled");
// 	$("#btnPrintSummary").attr('disabled','disabled');
// 	$('#btnPrintSummary').removeClass("btnstyle").addClass("btndisabled");
// 	$("#report_details").hide();
// 	pname=document.getElementById("pname");
// 	pname.innerHTML="Programme Name :";

// 	}

// }
// /*Semester*/

// /*Semester Change*/
// $("#id_sem").change(function(){
// 			var id_programme = $("#id_programme").val();
// 			var id_batch = $("#id_batch").val();
// 			var id_sem = $("#id_sem").val();
// 			var campusid=$("#campusid").val();
// 			if(id_sem == '')
// 			{
// 				$("#id_sem").removeAttr('disabled');
// 				sem_err=document.getElementById("sem_err");
// 				sem_err.innerHTML="Please Select A Semester";

// 				$("#id_course").val('');
// 				$("#id_course").attr('disabled','disabled');
// 				course_err=document.getElementById("course_err");
// 				course_err.innerHTML="";

// 				$("#generatereportbtn").attr('disabled','disabled');
// 				$('#generatereportbtn').removeClass("btnstyle").addClass("btndisabled");
// 				$("#btnPrintSummary").attr('disabled','disabled');
// 				$('#btnPrintSummary').removeClass("btnstyle").addClass("btndisabled");
// 				$("#report_details").hide();
// 				pname=document.getElementById("pname");
// 				pname.innerHTML="Programme Name :";

// 			}
// 			else
// 			{	
// 				var id_sem = $("#id_sem").val();
// 				sem_err=document.getElementById("sem_err");
// 				sem_err.innerHTML="";				
				
// 				$("#id_course").removeAttr('disabled');
							
// 				$.ajax
// 			 	({
// 					type: "POST",
// 					url: "/course_list/",
// 					data: {"id_programme":id_programme,"id_batch":id_batch,"id_sem":id_sem,"campusid":campusid},
// 					success: function (data)
// 					{
// 						//alert(data)
// 						var obj1 = JSON.parse(data);
// 						var coursenamelist= obj1.coursenamelist;
						
// 						courseTableData = "<option value=''>Select</option>"
// 						//alert(coursenamelist.length)
// 						if(coursenamelist.length!=0)
// 						{
// 							for(i=0;i<coursenamelist.length;i++)
// 						    	{
// 								var course_id=coursenamelist[i].course_id;	
// 								var course_name=coursenamelist[i].course_name;
// 								var course_code=coursenamelist[i].course_code;
// 								courseTableData+="<option value="+course_id+" name='course'>"+course_code+': '+course_name+"</option>";
				
// 								divelement=document.getElementById("id_course")
// 								divelement.innerHTML=courseTableData
// 							}
// 							course_err=document.getElementById("course_err");
// 							course_err.innerHTML="Please Select A Course Name";
// 						}
// 						else
// 						{
// 							courseTableData = "<option value=''>Select</option>"
// 							divelement=document.getElementById("id_course")
// 							divelement.innerHTML=courseTableData
// 							course_err=document.getElementById("course_err");
// 							course_err.innerHTML="There are no Courses To Display For Semester "+id_sem;
// 						}
// 					}
// 				});
				
// 				$("#generatereportbtn").attr('disabled','disabled');
// 				$('#generatereportbtn').removeClass("btnstyle").addClass("btndisabled");
// 				$("#btnPrintSummary").attr('disabled','disabled');
// 				$('#btnPrintSummary').removeClass("btnstyle").addClass("btndisabled");
// 				$("#report_details").hide();
// 				pname=document.getElementById("pname");
// 				pname.innerHTML="Programme Name :";

// 			}
// });
// /*Semester*/
});

