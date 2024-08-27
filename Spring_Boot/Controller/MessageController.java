package com.Project.Controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Project.Entity.Message;
import com.Project.Entity.UserLogin;
import com.Project.service.MessageService;
import com.Project.service.UserService;

@RestController
@RequestMapping("/messages")
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping("/send")
    public Message sendMessage(
            @RequestParam("senderEmail") String senderEmail,
            @RequestParam("receiverEmail") String receiverEmail,
            @RequestParam("content") String content
    ) {
        UserLogin sender = userService.findByEmail(senderEmail);
        UserLogin receiver = userService.findByEmail(receiverEmail);
        Message message = new Message(sender, receiver, content, new Date());
        return messageService.saveMessage(message);
    }

    @GetMapping("/history")
    public List<Message> getMessageHistory(
        @RequestParam("email1") String email1,
        @RequestParam("email2") String email2
    ) {
        return messageService.getMessageHistoryByEmails(email1, email2);
    }
}
