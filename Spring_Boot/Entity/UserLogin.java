package com.Project.Entity;

import java.util.Set;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class UserLogin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	
	private String email;
	private String password;
	
	private String name;
	private long Phno;
	private String ImgUrl;
	

	public String getImgUrl() {
		return ImgUrl;
	}

	public void setImgUrl(String imgUrl) {
		ImgUrl = imgUrl;
	}
		@OneToMany(mappedBy = "sender")
		
	    private Set<Message> sentMessages;

	    @OneToMany(mappedBy = "receiver")
	    
	    private Set<Message> receivedMessages;
	    
	    
	    public Set<Message> getSentMessages() {
	        return sentMessages;
	    }

	    public void setSentMessages(Set<Message> sentMessages) {
	        this.sentMessages = sentMessages;
	    }

	    public Set<Message> getReceivedMessages() {
	        return receivedMessages;
	    }

	    public void setReceivedMessages(Set<Message> receivedMessages) {
	        this.receivedMessages = receivedMessages;
	    }
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getPhno() {
		return Phno;
	}
	public void setPhno(long phno) {
		Phno = phno;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserLogin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public UserLogin() {
		super();
	}
	@Override
	public String toString() {
		return "UserLogin [userId=" + userId + ", email=" + email + ", password=" + password + "]";
	}

	


}
