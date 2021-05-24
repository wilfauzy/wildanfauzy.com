import tweepy
auth = tweepy.OAuthHandler("kostumer key kalian", "kostumer secret kaliam") 
auth.set_access_token("akses token kalian", "akses token secret kalian") 
api = tweepy.API(auth)
print ("Tweet From Terminal, Made By @WilFauzy On Twitter!")
print ("Twitter For........")
tweet = input("What Would You Like To Tweet? ")
api.update_status(status =(tweet))
print ("Done!")