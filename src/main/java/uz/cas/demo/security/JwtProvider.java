package uz.cas.demo.security;

import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import uz.cas.demo.entity.Users;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtProvider {
    private String JwtKey = "cas-secret";

    public String generateToken(Authentication authentication) {
        Users user=(Users) authentication.getPrincipal();
        Date now=new Date(System.currentTimeMillis());

        Date expireDate=new Date(now.getTime()+24*60*60*1000);  // 3 days
        String userId= String.valueOf(user.getId());
        Map<String,Object> claims=new HashMap<>();
        claims.put("id",userId);
        claims.put("username",user.getUsername());
        claims.put("role",user.getRoles());
        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS256, JwtKey)
                .compact();
    }
    public boolean isValidToken(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(JwtKey)
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public String getUserNameFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(JwtKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }



}
