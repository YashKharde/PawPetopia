package com.Project.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class MyHandler extends TextWebSocketHandler {
	
	  private final Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<>());

	    @Override
	    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
	        sessions.add(session);
	        System.out.println("Connected: " + session.getId());
	    }

	    @Override
	    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
	        System.out.println("Received: " + message.getPayload());
	        broadcastMessage(message.getPayload());
	        
	    }

	    @Override
	    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
	        sessions.remove(session);
	        System.out.println("Disconnected: " + session.getId());
	    }

	    private void broadcastMessage(String message) {
	        synchronized (sessions) {
	            for (WebSocketSession session : sessions) {
	                try {
	                    session.sendMessage(new TextMessage(message));
	                    System.out.println("hello");
	                } catch (Exception e) {
	                    e.printStackTrace();
	                }
	            }
	        }
	    }
}
