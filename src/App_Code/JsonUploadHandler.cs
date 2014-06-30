using System;
using System.Web;

namespace Antithesis.Code
{
	public class JsonUploadHandler : IHttpHandler
	{
		public void ProcessRequest(HttpContext context)
		{
			// Verify that the IIS server as at lease authenticated the request.
			// This is designed to stop servers from accidentally exposing
			// a method to write files to the server without having the user authenticate.
			if(!context.Request.IsAuthenticated)
			{
				context.Response.StatusCode = 403;
				context.Response.StatusDescription = "Not Cool. Authentication is not enabled.";
				context.Response.TrySkipIisCustomErrors = true;
				context.Response.End();
				return;
			}
		
			// TODO: Validate file content, mime type and size, then write the file into the site folder.
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
