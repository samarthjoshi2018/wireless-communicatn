package com.samarth;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		
			PrintWriter out=response.getWriter();
			out.print("Hi");
			
			ServletContext ctx=getServletContext();
			String str=ctx.getInitParameter("name");
			out.println(str);
			
//			ServletConfig cg=getServletConfig();
//			String str=cg.getInitParameter("name");
//			out.println(str);
	}
	
		 
}
