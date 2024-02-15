package org.zappy;

import org.robotframework.javalib.annotation.RobotKeywords;
import org.robotframework.javalib.annotation.RobotKeyword;

@RobotKeywords
public class keywords {
    public keywords(){}

    @RobotKeyword
    public static int sum(int n1, int n2){
        return n1+n2;
    }
}