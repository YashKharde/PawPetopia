package com.Project.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.Entity.Message;
import com.Project.Entity.UserLogin;
import com.Project.Reposiory.MessageRepository;
import com.Project.Reposiory.UserRepository;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> getMessageHistoryByEmails(String email1, String email2) {
        UserLogin user1 = userRepository.findByEmail(email1);
        UserLogin user2 = userRepository.findByEmail(email2);

        if (user1 == null || user2 == null) {
            throw new RuntimeException("User not found");
        }

        return messageRepository.findBySenderAndReceiver(user1, user2);
    }
}

