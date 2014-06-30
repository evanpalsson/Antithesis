using System;
using System.Web;

namespace Antithesis.Code
{
	public class JsonUploadHandler : IHttpHandler
	{
		public void ProcessRequest(HttpContext context)
		{
			context.Response.StatusCode = 200;
			context.Response.StatusDescription = "Ok, cool.";
			context.Response.ContentEncoding = System.Text.Encoding.UTF8;
			context.Response.ContentType = "application/json";
			context.Response.Write("{");
			context.Response.Write("\"status\":\"Ok\"");
			context.Response.Write(",");
			context.Response.Write("\"path\":\"" + context.Request.Path + "\"");
			context.Response.Write("}");
			context.Response.End();
		}
	
	
		// Override the IsReusable property. 
		public bool IsReusable
		{
			get { return true; }
		}
	}



}
