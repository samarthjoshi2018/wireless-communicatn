package com.samarth;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        // Simple hardcoded validation (replace with real logic)
        if ("admin".equals(username) && "pass123".equals(password)) {
            // Valid credentials - forward to welcome page
            request.setAttribute("username", username);
            request.getRequestDispatcher("/welcome").forward(request, response);
        } else {
            // Invalid credentials - redirect back to login with error
            response.sendRedirect("login.html?error=1");
        }
    }
}