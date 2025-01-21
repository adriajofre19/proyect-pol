"use client"

import { X } from 'lucide-react'
import { formatDate } from "@/lib/utils"
import { Article } from '@/types/blog';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from 'next/image';

export function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="relative w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden">
                {/* Hero Image Section */}
                <div className="relative h-80 overflow-hidden">
                    <Image width={2000} height={1000}
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-4 right-4 rounded-full"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Content Section */}
                <ScrollArea className="max-h-[60vh]">
                    <CardHeader className="space-y-6">
                        <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-sm">
                                {article.category}
                            </Badge>
                            <time className="text-sm text-muted-foreground">
                                {formatDate(new Date(article.date))}
                            </time>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight">{article.title}</h2>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        {/* Author Info */}
                        <div className="flex items-center space-x-4 border-t border-b border-border py-4">
                            <Avatar>
                                <AvatarImage src={`https://avatar.vercel.sh/${article.author}`} />
                                <AvatarFallback>{article.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h3 className="font-medium leading-none">{article.author}</h3>
                                <p className="text-sm text-muted-foreground">{article.readTime} de lectura</p>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {article.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end pt-6 border-t border-border">
                            <Button variant="outline" onClick={onClose}>
                                Cerrar artículo
                            </Button>
                        </div>
                    </CardContent>
                </ScrollArea>
            </Card>
        </div>
    )
}
