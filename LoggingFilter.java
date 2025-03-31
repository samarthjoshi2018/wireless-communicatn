import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter("/*")
public class RequestLogger implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) 
            throws IOException, ServletException {
        
        HttpServletRequest httpReq = (HttpServletRequest) req;
        System.out.println("[" + new java.util.Date() + "] " + 
                         httpReq.getMethod() + " " + 
                         httpReq.getRequestURI());
        
        chain.doFilter(req, res);
    }
}