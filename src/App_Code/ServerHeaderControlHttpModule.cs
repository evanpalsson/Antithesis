using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Antithesis.Code
{
	public class ServerHeaderControlHttpModule : IHttpModule
	{
		public void Init(HttpApplication context)
		{
			context.PreSendRequestHeaders += OnPreSendRequestHeaders;
		}

		public void Dispose() { }

		void OnPreSendRequestHeaders(object sender, EventArgs e)
		{
			HttpContext.Current.Response.Headers.Remove("Server");
		}
	}
}
