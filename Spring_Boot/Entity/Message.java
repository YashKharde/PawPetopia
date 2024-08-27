package com.Project.Entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long messageId;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false,referencedColumnName = "userId")
    @JsonIgnoreProperties({"sentMessages", "receivedMessages"})
    private UserLogin sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false,referencedColumnName = "userId")
    @JsonIgnoreProperties({"sentMessages", "receivedMessages"})
    private UserLogin receiver;

    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    // Constructor
    public Message(UserLogin sender, UserLogin receiver, String content, Date timestamp) {
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
        this.timestamp = timestamp;
    }

    public Message() {
    }

    // Getters and Setters
    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public UserLogin getSender() {
        return sender;
    }

    public void setSender(UserLogin sender) {
        this.sender = sender;
    }

    public UserLogin getReceiver() {
        return receiver;
    }

    public void setReceiver(UserLogin receiver) {
        this.receiver = receiver;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Message [messageId=" + messageId + ", sender=" + sender + ", receiver=" + receiver + ", content=" + content + ", timestamp=" + timestamp + "]";
    }
}
