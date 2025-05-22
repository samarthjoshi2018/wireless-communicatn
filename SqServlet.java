package com.samarth;

import java.io.IOException;
import java.io.PrintWriter;

import org.apache.tomcat.util.http.parser.Cookie;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class SqServlet extends HttpServlet{
		
	protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
		
//		int k=0;
//		Cookie cookies[]=req.getCookies();
//		for(Cookie c: cookies) {
//			if(c.getName().equals("k")) {
//				k=Integer.parseInt(c.getValue());
//			}
//		}
		HttpSession session=req.getSession();
		int k=(int)session.getAttribute("k");
		
		k=k*k;
		
		
		PrintWriter out=res.getWriter();
		out.println("result is "+k);
		System.out.println("sq called");
       }  

}
