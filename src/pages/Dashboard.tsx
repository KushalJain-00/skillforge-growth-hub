import Navigation from "@/components/Navigation";
import { TrendingUp, Zap, Trophy, Target, Calendar, Users, BookOpen, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const userStats = {
    name: "Alex Chen",
    level: 12,
    xp: 2840,
    nextLevelXp: 3000,
    streak: 7,
    completedCourses: 3,
    badges: 8,
    rank: 156
  };

  const recentActivity = [
    { type: "course", title: "React Fundamentals", progress: 100, date: "2 days ago" },
    { type: "project", title: "E-commerce Dashboard", progress: 85, date: "3 days ago" },
    { type: "badge", title: "JavaScript Expert", progress: 100, date: "1 week ago" },
    { type: "course", title: "TypeScript Advanced", progress: 60, date: "2 weeks ago" }
  ];

  const learningGoals = [
    { title: "Complete React Course", progress: 75, target: "End of month" },
    { title: "Build 3 Projects", progress: 66, target: "Next 2 weeks" },
    { title: "Earn 5 New Badges", progress: 80, target: "This quarter" }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          
          {/* Welcome Section */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome back, {userStats.name}! 👋
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to continue your learning journey?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="glass-card border-0 hover:shadow-elevated transition-all duration-300 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{userStats.xp}</p>
                  <p className="text-sm text-muted-foreground">Total XP</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Calendar className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground flex items-center justify-center">
                    {userStats.streak} <span className="ml-1">🔥</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Trophy className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{userStats.badges}</p>
                  <p className="text-sm text-muted-foreground">Badges</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">#{userStats.rank}</p>
                  <p className="text-sm text-muted-foreground">Global Rank</p>
                </CardContent>
              </Card>
            </div>

            {/* Level Progress */}
            <Card className="glass-card border-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Level Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">Level {userStats.level}</div>
                  <div className="text-sm text-muted-foreground">
                    {userStats.xp} / {userStats.nextLevelXp} XP
                  </div>
                </div>
                <Progress 
                  value={(userStats.xp / userStats.nextLevelXp) * 100} 
                  className="h-3 mb-4"
                />
                <div className="text-center">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border-primary/20">
                    {userStats.nextLevelXp - userStats.xp} XP to next level
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Recent Activity */}
            <Card className="glass-card border-0 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      {activity.progress < 100 ? (
                        <Progress value={activity.progress} className="w-20 h-2" />
                      ) : (
                        <Badge className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground border-0">
                          Complete
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="glass-card border-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-accent" />
                  <span>Learning Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {learningGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">{goal.title}</h4>
                      <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{goal.target}</p>
                  </div>
                ))}
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 mt-4">
                  Set New Goal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;